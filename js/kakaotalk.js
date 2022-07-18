function shareMessage() {
  Kakao.Share.sendCustom({
    templateId: 79815,
    templateArgs: {
      title:
        '현재보영 모바일청첩장',
      description:
        '2022.10.23. 일요일 12:30 드레스가든',
    },
  })
}