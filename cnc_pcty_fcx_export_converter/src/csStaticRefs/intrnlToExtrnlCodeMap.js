const intrnlToExtrnlCodeMapArry=[
  {
    fcxIntrnlCodeWNameStr: "REG - Regular",
    pctyExtrnlCodeStr: "REG",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "OT - Overtime",
    pctyExtrnlCodeStr: "OT",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "DT - Doubletime",
    pctyExtrnlCodeStr: "DT",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "VAC - Vacation",
    pctyExtrnlCodeStr: "VAC",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "SICK",
    pctyExtrnlCodeStr: "SICK",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "HOL - Holiday",
    pctyExtrnlCodeStr: "HOL",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "FRING - Fringe Regular",
    pctyExtrnlCodeStr: "FRING",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "FRNGO - Fringe Overtime",
    pctyExtrnlCodeStr: "FRNGO",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "FRNGD - Fringe Double-Time",
    pctyExtrnlCodeStr: "FRNGD",
    reqFringeBool: "FALSE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0101B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0102B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0201B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0202B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0301B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "AP0302C_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IN_PWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "Tech_PWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW_PWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0101B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0102B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0201B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0202B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0301B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302A_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302B_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWR",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWO",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWD",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWR_S2",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWO_S2",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWD_S2",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWR_S3",
    pctyExtrnlCodeStr: "BHR",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWO_S3",
    pctyExtrnlCodeStr: "BHRO",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: "IW0302C_HrlyPWD_S3",
    pctyExtrnlCodeStr: "BHRD",
    reqFringeBool: "TRUE"
  },
  {
    fcxIntrnlCodeWNameStr: ""
  }
]
export default intrnlToExtrnlCodeMapArry;