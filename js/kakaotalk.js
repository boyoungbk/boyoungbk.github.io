Kakao.init('a6bcf5f5770e250e68f1d08999c7fb4e')

function shareMessage() {
  Kakao.Share.sendCustom({
    templateId: 79815
  })
}