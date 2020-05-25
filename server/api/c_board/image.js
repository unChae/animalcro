
// modules
const response = require("../../utils/u_res");

// models
const models = require("../../models");
const Image = models.Image;
const Board = models.Board;

var image = function(req, res) {
    // console.log(req.files);
    var files = req.files;
    var bo_id = req.headers.bo_id;
    var bo_thumbnail;
    
    // 게시물에서 thumbnail 값을 찾음
    Board.findOne({
        where: {bo_id}
    })
    .then((result) => {
        bo_thumbnail = parseInt(result.bo_thumbnail);
        for(var i = 0; i < files.length; i++) {
            // image 테이블에 이미지 주소와 게시물 id 저장
            Image.create({
                im_bo_id: bo_id,
                im_location: files[i].location
            })
            .catch((error) => {
                response(res, 500, false, "[에러] 서버문제로 이미지 파일 등록을 실패했습니다");
            })
            // 이미지를 저장하다 썸네일과 순번이 같아지면 썸네일 컬럼에 직접적인 s3 이미지 주소값으로 대체
            if(i === bo_thumbnail){
                Board.update({
                    bo_thumbnail:files[i].location
                }, {
                    where: {bo_id}
                })
                .catch((error) => {
                    response(res, 500, false, "[에러] 서버문제로 썸네일 파일 등록을 실패했습니다");
                })
            }
        };
    })
    .catch((error) => {
        response(res, 500, false, "[에러] 게시판 데이터가 일치하지 않습니다");
    });
    response(res, 200, true, "[완료] 이미지가 전부 업로드 되었습니다");
}

module.exports = image;