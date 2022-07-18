function shareMessage() {
  try {
    if (Kakao) {
        Kakao.init('a6bcf5f5770e250e68f1d08999c7fb4e');
    };
} catch(e) {};

  Kakao.Share.sendCustom({
    templateId: 79815
  })
}