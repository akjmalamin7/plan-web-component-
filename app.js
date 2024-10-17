class PlanWidget extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  getIcon(time) {
    const validityRemaining = time - Date.now();
    const oneDayInMillis = 86400000;
    const thirtyDaysInMillis = oneDayInMillis * 30;

    const icons = {
      active: `<?xml version="1.0" encoding="UTF-8"?><svg viewBox="0 0 54 60" xmlns="http://www.w3.org/2000/svg"><path d="m13.583 5.9407v-4.6157c0.0075-0.77771 0.4947-1.3249 1.1431-1.3249s1.1076 0.52847 1.1244 1.338v0.8433c0 1.1719 0.0044 2.3431 0.0132 3.5138 0.0138 0.06474 0.0352 0.12764 0.0637 0.1874h22.19v-3.8567c0-0.30547-0.0132-0.61093 0-0.91452 0.0034-0.29821 0.1252-0.58282 0.3386-0.79123 0.2133-0.20841 0.5007-0.32353 0.7989-0.32005 0.2982 0.0034791 0.5828 0.12528 0.7912 0.33861 0.2084 0.21333 0.3235 0.5007 0.3201 0.79892 0.0243 1.3811 0.0112 2.7642 0.0131 4.1453v0.61842c0.3036 0.01499 0.5509 0.03748 0.7983 0.03935h6.9338c3.4238 0.01124 5.86 2.4418 5.86 5.8656v42.302c0 3.4369-2.4605 5.8994-5.8768 5.8994h-42.234c-3.377-0.0113-5.86-2.4756-5.86-5.8488v-42.381c0-3.4144 2.4362-5.8263 5.8563-5.8357h6.8757l0.8508-0.00187zm-11.323 14.284v0.8452 32.887c0 2.3631 1.3943 3.748 3.748 3.748h41.953c2.3538 0 3.748-1.3924 3.748-3.7611v-32.956c0-0.2474-0.0206-0.4948-0.0337-0.7684l-49.416 0.0056zm35.857-11.979h-22.265v0.73086c0 1.2874 0.0412 2.5786-0.0281 3.8623-0.0164 0.2122-0.0746 0.4191-0.171 0.6088-0.0965 0.1897-0.2294 0.3585-0.3912 0.4968-0.7496 0.5266-1.666-0.0693-1.6866-1.0438-0.0206-1.5385 0-3.0771 0-4.6306-0.1357-0.03176-0.2735-0.05368-0.4123-0.06559-2.5018 0-5.0036-0.03748-7.496 0.01124-2.0127 0.03748-3.3732 1.4992-3.3994 3.5306-0.01874 1.8085 0.02061 3.6206-0.01874 5.414-0.015 0.6222 0.16303 0.7852 0.78333 0.7852 15.969-0.0187 31.938-0.0243 47.907-0.0168 0.2455 0 0.491-0.0281 0.7702-0.0469v-5.9162c0-2.3669-1.3868-3.748-3.748-3.7611-2.2675-0.0075-4.5357-0.0075-6.8045 0-0.2286 0-0.4573 0.02061-0.7627 0.0356v0.72899 3.9354c0 0.5491-0.2268 1.0288-0.7627 1.1244-0.4193 0.0465-0.8414-0.0585-1.19-0.2961-0.2193-0.1574-0.2961-0.6222-0.3036-0.9501-0.0375-1.503-0.0206-2.9966-0.0206-4.537z" fill="#ADADAD"/><path d="m39.322 26.217c0.7077 0.0057 1.4074 0.1508 2.0589 0.427 0.6516 0.2763 1.2423 0.6783 1.7383 1.1831 0.4961 0.5047 0.8877 1.1023 1.1526 1.7586 0.2649 0.6562 0.3978 1.3583 0.3912 2.066-2e-4 1.0788-0.3214 2.1331-0.9229 3.0288-0.6014 0.8956-1.4557 1.592-2.4542 2.0004-0.9986 0.4085-2.096 0.5105-3.1527 0.2931s-2.0248-0.7444-2.781-1.5139c-0.7562-0.7694-1.2662-1.7465-1.4652-2.8068s-0.0779-2.1559 0.3478-3.1471c0.4257-0.9913 1.1369-1.8334 2.0428-2.4192 0.906-0.5857 1.9658-0.8886 3.0444-0.87zm3.0734 5.3878c-0.0048-0.6225-0.1939-1.2295-0.5435-1.7446s-0.8439-0.9151-1.4206-1.1494c-0.5766-0.2344-1.2098-0.2926-1.8196-0.1674s-1.1688 0.4282-1.6065 0.8709c-0.4376 0.4426-0.7344 1.005-0.8527 1.6161-0.1183 0.6112-0.0529 1.2437 0.188 1.8177 0.2408 0.574 0.6463 1.0638 1.1653 1.4075s1.1282 0.526 1.7507 0.5238c0.4147-0.0017 0.825-0.0853 1.2074-0.2459 0.3824-0.1605 0.7293-0.395 1.0209-0.6899s0.5221-0.6445 0.6784-1.0287c0.1563-0.3841 0.2352-0.7954 0.2322-1.2101z" fill="#ADADAD"/><path d="m14.715 26.216c1.4301-0.0036 2.8039 0.5566 3.8237 1.5592s1.6033 2.3667 1.624 3.7967c0.0345 0.7336-0.08 1.4667-0.3367 2.1549-0.2567 0.6881-0.6503 1.3171-1.1569 1.8489-0.5065 0.5318-1.1157 0.9554-1.7906 1.2452-0.6748 0.2899-1.4015 0.4399-2.1359 0.441-0.7345 0.0011-1.4616-0.1466-2.1374-0.4343s-1.2862-0.7095-1.7945-1.2397c-0.5082-0.5302-0.90369-1.158-1.1625-1.8453-0.25885-0.6874-0.37568-1.4201-0.34344-2.1539 0.00197-0.7081 0.14352-1.409 0.41657-2.0624s0.6722-1.2465 1.1747-1.7456c0.5025-0.499 1.0984-0.894 1.7537-1.1625s1.3571-0.4052 2.0653-0.4022zm-3.1408 5.3971c-0.0033 0.6222 0.1777 1.2315 0.5203 1.751 0.3426 0.5194 0.8313 0.9258 1.4045 1.1678 0.5733 0.242 1.2054 0.3089 1.8165 0.1921 0.6112-0.1168 1.1741-0.412 1.6178-0.8483 0.4436-0.4363 0.7481-0.9942 0.875-1.6034s0.0706-1.2423-0.1619-1.8195c-0.2325-0.5771-0.6307-1.0725-1.1444-1.4237-0.5137-0.3511-1.1198-0.5423-1.742-0.5493-0.4154-0.0052-0.8278 0.0719-1.2132 0.2269-0.3854 0.1549-0.7364 0.3847-1.0325 0.676-0.2962 0.2913-0.5318 0.6384-0.6931 1.0212-0.1614 0.3828-0.2453 0.7938-0.247 1.2092z" fill="#ADADAD"/><path d="m27.008 39.197c1.0716 0.0022 2.1186 0.3219 3.0088 0.9187 0.8901 0.5968 1.5835 1.4439 1.9926 2.4344 0.4091 0.9906 0.5155 2.0801 0.3059 3.1311-0.2096 1.0509-0.7259 2.0163-1.4837 2.7741-0.7578 0.7577-1.7231 1.274-2.7741 1.4837-1.051 0.2096-2.1405 0.1031-3.131-0.306-0.9906-0.409-1.8377-1.1024-2.4345-1.9926-0.5968-0.8901-0.9164-1.9371-0.9187-3.0088-0.0072-0.7157 0.1284-1.4257 0.3989-2.0883 0.2706-0.6626 0.6706-1.2646 1.1767-1.7707s1.1081-0.9062 1.7708-1.1767c0.6626-0.2706 1.3725-0.4062 2.0883-0.3989zm-0.0225 8.5698c0.6239 8e-4 1.234-0.1835 1.7533-0.5294 0.5192-0.3459 0.9243-0.8379 1.164-1.414 0.2397-0.576 0.3033-1.2102 0.1827-1.8223-0.1206-0.6122-0.4199-1.1749-0.8602-1.617-0.4402-0.4421-1.0017-0.7437-1.6133-0.8669-0.6117-0.1231-1.2461-0.0621-1.8231 0.1752-0.5771 0.2373-1.0708 0.6403-1.4188 1.1581-0.3481 0.5178-0.5349 1.1272-0.5367 1.7511-0.0015 0.415 0.0789 0.8262 0.2367 1.21 0.1577 0.3838 0.3896 0.7328 0.6824 1.0268 0.2928 0.2941 0.6408 0.5274 1.024 0.6867 0.3831 0.1593 0.794 0.2415 1.209 0.2417z" fill="#ADADAD"/><path d="m14.782 39.197c1.0722 0.0108 2.1171 0.3391 3.0028 0.9436 0.8856 0.6044 1.5722 1.4578 1.973 2.4523 0.4007 0.9945 0.4978 2.0855 0.2787 3.1351-0.219 1.0496-0.7442 2.0107-1.5093 2.7619s-1.7357 1.2588-2.7891 1.4586c-1.0535 0.1998-2.1425 0.0828-3.1295-0.3361s-1.8277-1.121-2.4158-2.0175c-0.58813-0.8966-0.8973-1.9473-0.88847-3.0195 0.01485-1.4391 0.59989-2.8135 1.6268-3.8218 1.0269-1.0083 2.4118-1.5681 3.8509-1.5566zm-3.2139 5.4346c0.0063 0.6224 0.1966 1.229 0.547 1.7435 0.3503 0.5145 0.8451 0.9137 1.4219 1.1476 0.5769 0.2338 1.21 0.2917 1.8197 0.1665 0.6097-0.1253 1.1687-0.4282 1.6066-0.8705s0.7351-1.0043 0.8543-1.6153c0.1191-0.6109 0.0548-1.2434-0.1848-1.8178-0.2396-0.5745-0.6439-1.0652-1.1618-1.4104-0.518-0.3452-1.1265-0.5294-1.7489-0.5294-0.4163 0.0015-0.8282 0.0851-1.2122 0.246-0.3839 0.1609-0.7324 0.3959-1.0253 0.6917-0.293 0.2957-0.5247 0.6464-0.682 1.0318-0.1573 0.3855-0.2369 0.7982-0.2345 1.2144v0.0019z" fill="#ADADAD"/><path d="m39.255 50.036c-1.4379-0.0019-2.8161-0.575-3.8314-1.5932-1.0153-1.0181-1.5846-2.3979-1.5826-3.8358 2e-3 -1.4378 0.5751-2.816 1.5932-3.8313 1.0181-1.0154 2.3979-1.5846 3.8358-1.5827 1.4378 2e-3 2.816 0.5751 3.8314 1.5933 1.0153 1.0181 1.5846 2.3979 1.5826 3.8357-2e-3 1.4379-0.5751 2.8161-1.5933 3.8314-1.0181 1.0153-2.3979 1.5846-3.8357 1.5826zm3.1427-5.4046c4e-3 -0.6224-0.1764-1.232-0.5185-1.752-0.3421-0.5199-0.8306-0.9269-1.4038-1.1695-0.5731-0.2425-1.2053-0.3099-1.8168-0.1936-0.6114 0.1164-1.1747 0.4113-1.6187 0.8474-0.444 0.4362-0.7488 0.9941-0.876 1.6034-0.1273 0.6092-0.0712 1.2425 0.1612 1.8199s0.6305 1.0731 1.1443 1.4244 1.1201 0.5425 1.7425 0.5496c0.8362 0.0055 1.6407-0.3201 2.2376-0.9058s0.9378-1.3838 0.9482-2.22v-0.0038z" fill="#ADADAD"/><path d="m26.999 26.217c0.7154-0.0036 1.4243 0.1358 2.085 0.41 0.6608 0.2743 1.2601 0.6778 1.7627 1.1868 0.5026 0.5091 0.8984 1.1135 1.1642 1.7777s0.3961 1.3749 0.3833 2.0901c0.0053 0.7179-0.1324 1.4297-0.405 2.0938s-0.6747 1.2674-1.1827 1.7746c-0.5081 0.5071-1.112 0.9082-1.7766 1.1796-0.6646 0.2715-1.3766 0.4079-2.0945 0.4015-0.7179-0.0065-1.4273-0.1558-2.0869-0.4392-0.6596-0.2833-1.2562-0.6952-1.755-1.2114-0.4989-0.5163-0.89-1.1267-1.1506-1.7956s-0.3854-1.383-0.3673-2.1007c2e-4 -0.7095 0.1411-1.4119 0.4144-2.0667 0.2733-0.6547 0.6737-1.2488 1.178-1.7479s1.1025-0.8933 1.7601-1.1597c0.6576-0.2665 1.3614-0.4 2.0709-0.3929zm-0.0375 2.2638c-0.6223 0.0045-1.2294 0.1932-1.7446 0.5422-0.5152 0.3491-0.9154 0.843-1.1502 1.4193-0.2349 0.5764-0.2937 1.2093-0.1692 1.8191 0.1246 0.6097 0.4269 1.1689 0.8689 1.607s1.0039 0.7354 1.6147 0.8545 1.2432 0.0547 1.8175-0.1853c0.5742-0.2399 1.0645-0.6446 1.4089-1.1628 0.3445-0.5183 0.5278-1.127 0.5267-1.7494-5e-4 -0.415-0.0831-0.8258-0.2431-1.2087-0.16-0.383-0.3942-0.7304-0.6892-1.0224-0.2949-0.292-0.6447-0.5227-1.0292-0.6788-0.3846-0.1561-0.7962-0.2346-1.2112-0.2309v-0.0038z" fill="#ADADAD"/></svg>`,

alert: `<svg width="54" height="60" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5828 5.94067C13.5828 4.31778 13.5828 2.82045 13.5828 1.325C13.5903 0.547286 14.0775 7.66209e-05 14.7259 7.66209e-05C15.3743 7.66209e-05 15.8335 0.528546 15.8503 1.33812C15.8503 1.61922 15.8503 1.90032 15.8503 2.18142C15.8503 3.3533 15.8547 4.52455 15.8635 5.69518C15.8773 5.75992 15.8987 5.82282 15.9272 5.88258H38.1173C38.1173 4.58764 38.1173 3.30582 38.1173 2.02588C38.1173 1.72041 38.1041 1.41495 38.1173 1.11136C38.1207 0.813151 38.2425 0.528537 38.4559 0.320131C38.6692 0.111724 38.9566 -0.0034025 39.2548 7.66209e-05C39.553 0.00355574 39.8376 0.125356 40.046 0.338682C40.2544 0.552009 40.3695 0.839387 40.3661 1.1376C40.3904 2.51874 40.3773 3.90175 40.3792 5.2829V5.90132C40.6828 5.91631 40.9301 5.9388 41.1775 5.94067C43.4919 5.94067 45.8063 5.94067 48.1113 5.94067C51.5351 5.95191 53.9713 8.3825 53.9713 11.8063C53.9713 25.9076 53.9713 40.0082 53.9713 54.1082C53.9713 57.5451 51.5108 60.0076 48.0945 60.0076H5.86001C2.48306 59.9963 0 57.532 0 54.1588C0 40.0301 0 25.9032 0 11.7782C0 8.36376 2.43621 5.95191 5.85627 5.94254C8.14817 5.94254 10.4401 5.94254 12.732 5.94254L13.5828 5.94067ZM2.26005 20.2243V21.0695C2.26005 32.0324 2.26005 42.9947 2.26005 53.9564C2.26005 56.3195 3.65431 57.7044 6.00806 57.7044H47.9614C50.3152 57.7044 51.7094 56.312 51.7094 53.9433C51.7094 42.9579 51.7094 31.9725 51.7094 20.9871C51.7094 20.7397 51.6888 20.4923 51.6757 20.2187L2.26005 20.2243ZM38.1173 8.2457H15.8522V8.97656C15.8522 10.264 15.8934 11.5552 15.8241 12.8389C15.8077 13.0511 15.7495 13.258 15.6531 13.4477C15.5566 13.6374 15.4237 13.8062 15.2619 13.9445C14.5123 14.4711 13.5959 13.8752 13.5753 12.9007C13.5547 11.3622 13.5753 9.82361 13.5753 8.27006C13.4396 8.2383 13.3018 8.21638 13.163 8.20447C10.6612 8.20447 8.15942 8.16699 5.66699 8.21571C3.65431 8.25319 2.29378 9.71492 2.26755 11.7463C2.24881 13.5548 2.28816 15.3669 2.24881 17.1603C2.23381 17.7825 2.41184 17.9455 3.03214 17.9455C19.0012 17.9268 34.9702 17.9212 50.9392 17.9287C51.1847 17.9287 51.4302 17.9006 51.7094 17.8818C51.7094 15.8504 51.7094 13.9071 51.7094 11.9656C51.7094 9.59873 50.3226 8.21759 47.9614 8.20447C45.6939 8.19697 43.4257 8.19697 41.1569 8.20447C40.9283 8.20447 40.6996 8.22508 40.3942 8.24007V8.96906C40.3942 10.2809 40.3942 11.5927 40.3942 12.9045C40.3942 13.4536 40.1674 13.9333 39.6315 14.0289C39.2122 14.0754 38.7901 13.9704 38.4415 13.7328C38.2222 13.5754 38.1454 13.1106 38.1379 12.7827C38.1004 11.2797 38.1173 9.78613 38.1173 8.2457Z" fill="#ADADAD"/><path d="M39.3213 26.2176C40.029 26.2232 40.7286 26.3683 41.3802 26.6446C42.0317 26.9209 42.6224 27.3229 43.1185 27.8276C43.6145 28.3324 44.0062 28.93 44.2711 29.5862C44.536 30.2425 44.6689 30.9445 44.6622 31.6522C44.662 32.731 44.3408 33.7854 43.7394 34.681C43.138 35.5767 42.2836 36.2731 41.2851 36.6815C40.2866 37.0899 39.1891 37.1919 38.1324 36.9745C37.0757 36.7571 36.1076 36.2301 35.3515 35.4607C34.5953 34.6913 34.0852 33.7142 33.8862 32.6539C33.6872 31.5935 33.8083 30.498 34.2341 29.5067C34.6598 28.5155 35.3709 27.6733 36.2769 27.0876C37.1828 26.5019 38.2426 26.199 39.3213 26.2176ZM42.3947 31.6054C42.3898 30.9829 42.2007 30.3758 41.8511 29.8607C41.5016 29.3457 41.0073 28.9457 40.4306 28.7113C39.8539 28.477 39.2207 28.4187 38.6109 28.5439C38.0012 28.6691 37.4422 28.9722 37.0045 29.4148C36.5668 29.8575 36.2701 30.4198 36.1518 31.031C36.0335 31.6421 36.0988 32.2746 36.3397 32.8486C36.5806 33.4226 36.9861 33.9124 37.505 34.2561C38.024 34.5999 38.6332 34.7821 39.2557 34.7799C39.6704 34.7782 40.0807 34.6947 40.4631 34.5341C40.8455 34.3735 41.1924 34.139 41.484 33.8441C41.7756 33.5492 42.0062 33.1997 42.1624 32.8155C42.3187 32.4313 42.3976 32.0201 42.3947 31.6054Z" fill="#ADADAD"/><path d="M14.7143 26.2149C16.1444 26.2113 17.5183 26.7715 18.5381 27.7741C19.5578 28.7767 20.1413 30.1409 20.1621 31.5708C20.1966 32.3045 20.082 33.0375 19.8253 33.7257C19.5686 34.4138 19.1751 35.0428 18.6685 35.5746C18.1619 36.1064 17.5528 36.53 16.8779 36.8199C16.203 37.1097 15.4764 37.2597 14.7419 37.2608C14.0074 37.262 13.2803 37.1142 12.6045 36.8265C11.9288 36.5388 11.3183 36.1171 10.8101 35.5868C10.3018 35.0566 9.90635 34.4288 9.6475 33.7415C9.38866 33.0541 9.27183 32.3214 9.30407 31.5877C9.30603 30.8795 9.44759 30.1787 9.72063 29.5253C9.99368 28.8718 10.3929 28.2787 10.8954 27.7797C11.3978 27.2807 11.9938 26.8856 12.6491 26.6171C13.3044 26.3486 14.0062 26.2119 14.7143 26.2149ZM11.5735 31.612C11.5702 32.2343 11.7513 32.8435 12.0938 33.363C12.4364 33.8824 12.9251 34.2888 13.4984 34.5308C14.0716 34.7729 14.7037 34.8397 15.3149 34.7229C15.9261 34.6061 16.489 34.311 16.9326 33.8746C17.3762 33.4383 17.6807 32.8804 17.8076 32.2712C17.9345 31.6621 17.8782 31.029 17.6457 30.4518C17.4133 29.8746 17.0151 29.3792 16.5014 29.028C15.9877 28.6769 15.3815 28.4857 14.7593 28.4787C14.3439 28.4735 13.9316 28.5506 13.5461 28.7056C13.1607 28.8605 12.8098 29.0903 12.5136 29.3816C12.2174 29.6729 11.9818 30.02 11.8205 30.4028C11.6591 30.7856 11.5752 31.1966 11.5735 31.612Z" fill="#ADADAD"/><path d="M27.0091 39.1975C28.0808 39.1998 29.1278 39.5194 30.0179 40.1162C30.9081 40.713 31.6015 41.5601 32.0105 42.5507C32.4196 43.5412 32.5261 44.6307 32.3165 45.6817C32.1068 46.7327 31.5905 47.698 30.8328 48.4558C30.075 49.2136 29.1096 49.7299 28.0587 49.9395C27.0077 50.1491 25.9182 50.0427 24.9276 49.6336C23.9371 49.2245 23.09 48.5311 22.4932 47.641C21.8964 46.7508 21.5767 45.7038 21.5745 44.6322C21.5672 43.9165 21.7028 43.2065 21.9734 42.5439C22.2439 41.8812 22.644 41.2792 23.1501 40.7731C23.6562 40.267 24.2582 39.867 24.9208 39.5964C25.5834 39.3259 26.2934 39.1903 27.0091 39.1975ZM26.9866 47.7674C27.6105 47.7681 28.2207 47.5839 28.7399 47.238C29.2592 46.8921 29.6643 46.4 29.904 45.824C30.1437 45.2479 30.2073 44.6138 30.0867 44.0016C29.9661 43.3895 29.6668 42.8268 29.2265 42.3847C28.7862 41.9426 28.2248 41.6409 27.6131 41.5178C27.0015 41.3947 26.3671 41.4556 25.79 41.6929C25.213 41.9302 24.7193 42.3332 24.3712 42.8511C24.0232 43.3689 23.8364 43.9783 23.8345 44.6022C23.8331 45.0171 23.9135 45.4283 24.0712 45.8122C24.2289 46.196 24.4608 46.5449 24.7537 46.839C25.0465 47.133 25.3945 47.3664 25.7776 47.5257C26.1608 47.685 26.5716 47.7671 26.9866 47.7674Z" fill="#CA4F49"/><path d="M14.7826 39.1974C15.8548 39.2082 16.8997 39.5366 17.7853 40.141C18.6709 40.7454 19.3575 41.5988 19.7583 42.5933C20.1591 43.5878 20.2561 44.6788 20.0371 45.7284C19.818 46.778 19.2928 47.7392 18.5277 48.4904C17.7626 49.2416 16.792 49.7491 15.7386 49.9489C14.6852 50.1487 13.5961 50.0318 12.6091 49.6128C11.6221 49.1939 10.7815 48.4918 10.1933 47.5953C9.60521 46.6988 9.29603 45.648 9.30487 44.5758C9.31971 43.1368 9.90476 41.7623 10.9317 40.754C11.9586 39.7457 13.3435 39.1859 14.7826 39.1974ZM11.5687 44.6321C11.575 45.2544 11.7653 45.8611 12.1156 46.3755C12.466 46.89 12.9607 47.2893 13.5376 47.5231C14.1144 47.7569 14.7475 47.8149 15.3572 47.6896C15.9669 47.5643 16.5259 47.2615 16.9638 46.8191C17.4017 46.3768 17.699 45.8148 17.8181 45.2039C17.9372 44.593 17.8729 43.9604 17.6333 43.386C17.3937 42.8115 16.9895 42.3208 16.4715 41.9756C15.9536 41.6305 15.345 41.4463 14.7226 41.4462C14.3063 41.4477 13.8944 41.5313 13.5105 41.6922C13.1265 41.8531 12.7781 42.0881 12.4851 42.3839C12.1921 42.6797 11.9604 43.0303 11.8031 43.4158C11.6459 43.8012 11.5662 44.2139 11.5687 44.6302V44.6321Z" fill="#ADADAD"/><path d="M39.2538 50.0364C37.816 50.0344 36.4378 49.4613 35.4225 48.4431C34.4071 47.425 33.8379 46.0452 33.8398 44.6074C33.8418 43.1695 34.4149 41.7913 35.4331 40.776C36.4512 39.7607 37.831 39.1914 39.2688 39.1934C40.7067 39.1954 42.0849 39.7684 43.1002 40.7866C44.1155 41.8047 44.6848 43.1845 44.6828 44.6224C44.6809 46.0602 44.1078 47.4384 43.0896 48.4537C42.0715 49.4691 40.6917 50.0383 39.2538 50.0364ZM42.3966 44.6317C42.4006 44.0093 42.2202 43.3997 41.878 42.8798C41.5359 42.3598 41.0475 41.9529 40.4743 41.7103C39.9011 41.4677 39.2689 41.4003 38.6575 41.5167C38.0461 41.633 37.4828 41.9279 37.0388 42.364C36.5948 42.8002 36.29 43.3581 36.1627 43.9674C36.0355 44.5767 36.0916 45.2099 36.324 45.7873C36.5563 46.3648 36.9545 46.8604 37.4683 47.2117C37.9821 47.563 38.5884 47.7543 39.2107 47.7613C40.047 47.7668 40.8514 47.4412 41.4484 46.8555C42.0453 46.2698 42.3862 45.4717 42.3966 44.6355V44.6317Z" fill="#CA4F49"/><path d="M26.9993 26.2171C27.7147 26.2135 28.4236 26.3529 29.0844 26.6271C29.7451 26.9013 30.3444 27.3048 30.847 27.8139C31.3497 28.323 31.7455 28.9274 32.0112 29.5916C32.277 30.2558 32.4073 30.9664 32.3946 31.6817C32.3998 32.3995 32.2621 33.1113 31.9895 33.7754C31.7169 34.4396 31.3149 35.0428 30.8068 35.55C30.2987 36.0572 29.6948 36.4582 29.0302 36.7296C28.3656 37.0011 27.6536 37.1376 26.9357 37.1311C26.2179 37.1246 25.5085 36.9753 24.8489 36.692C24.1893 36.4086 23.5926 35.9968 23.0938 35.4805C22.5949 34.9642 22.2038 34.3539 21.9432 33.6849C21.6826 33.016 21.5578 32.3019 21.5759 31.5842C21.5762 30.8747 21.717 30.1723 21.9903 29.5175C22.2636 28.8628 22.664 28.2687 23.1683 27.7696C23.6726 27.2705 24.2709 26.8764 24.9284 26.6099C25.586 26.3434 26.2898 26.2099 26.9993 26.2171ZM26.9618 28.4809C26.3395 28.4853 25.7325 28.674 25.2173 29.0231C24.7021 29.3722 24.3018 29.866 24.067 30.4423C23.8322 31.0187 23.7733 31.6516 23.8978 32.2614C24.0224 32.8711 24.3247 33.4303 24.7667 33.8684C25.2087 34.3065 25.7706 34.6039 26.3814 34.723C26.9923 34.8421 27.6247 34.7776 28.1989 34.5376C28.7731 34.2977 29.2634 33.8931 29.6079 33.3748C29.9524 32.8565 30.1356 32.2478 30.1345 31.6254C30.1341 31.2104 30.0514 30.7996 29.8914 30.4167C29.7314 30.0338 29.4972 29.6863 29.2023 29.3943C28.9073 29.1024 28.5575 28.8716 28.173 28.7155C27.7885 28.5594 27.3768 28.4809 26.9618 28.4846V28.4809Z" fill="#ADADAD"/></svg>`,
      urgent: `<svg width="53" height="60" viewBox="0 0 53 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6681_23082)"><path d="M30.6867 0C31.692 0.378391 32.502 0.955359 32.8022 2.06082C33.2713 3.79486 32.0376 5.56798 30.2426 5.60238C27.6517 5.64928 25.0593 5.63678 22.4684 5.60238C21.1596 5.58674 20.0792 4.58135 19.8368 3.27418C19.7368 2.65387 19.8464 2.0179 20.1482 1.46684C20.4501 0.915775 20.927 0.481055 21.5036 0.231413L22.0259 0H30.6867Z" fill="#ADADAD"/><path d="M39.7541 11.1277C40.4843 10.1489 41.1926 9.19665 41.9071 8.24755C42.4341 7.54706 42.8781 7.48451 43.5864 8.00832C44.4652 8.65565 45.3439 9.30454 46.2102 9.96595C46.8575 10.46 46.9154 10.9041 46.4369 11.5655C46.082 12.0549 45.7145 12.5349 45.3533 13.0197L44.2588 14.4988C50.4162 20.5828 53.2714 27.9239 52.4067 36.5534C51.7563 43.0955 48.8886 48.6275 44.0665 53.0947C34.2565 62.1839 19.0364 62.2105 9.1685 53.6967C-0.937045 44.9812 -2.95252 30.3443 4.44017 19.1224C11.6968 8.10839 27.0264 3.68809 39.7541 11.1277ZM48.8229 33.7342C48.8448 21.3521 38.7549 11.245 26.3634 11.2356C14.0063 11.2262 3.92731 21.2739 3.88509 33.6498C3.84288 46.0257 13.9171 56.1453 26.3134 56.1781C38.7096 56.211 48.8057 46.1257 48.8276 33.7342H48.8229Z" fill="#ADADAD"/><path d="M25.4207 24.7931C25.4207 21.9463 25.4207 19.0985 25.4207 16.2496C25.4207 15.2646 25.7334 14.9737 26.7247 14.9847C35.7717 15.0941 43.5882 21.9802 44.8625 30.985C44.9813 31.8325 45.0329 32.6924 45.0673 33.5477C45.097 34.2732 44.728 34.6422 44.0072 34.6422C38.1698 34.6422 32.3375 34.6422 26.5105 34.6422C25.7553 34.6422 25.416 34.2889 25.416 33.5149C25.416 30.6076 25.4176 27.7004 25.4207 24.7931Z" fill="#CA4F49"/><path d="M9.49741 34.6472C9.4974 34.8331 9.44214 35.0149 9.33863 35.1694C9.23512 35.3238 9.08805 35.4441 8.91607 35.5148C8.7441 35.5855 8.55499 35.6035 8.37275 35.5666C8.19051 35.5296 8.02337 35.4393 7.89255 35.3072C7.76173 35.175 7.67312 35.007 7.63799 34.8244C7.60286 34.6418 7.62278 34.4529 7.69523 34.2816C7.76768 34.1104 7.88938 33.9645 8.04489 33.8626C8.2004 33.7606 8.3827 33.7072 8.56864 33.709C8.81582 33.7115 9.05204 33.8114 9.22596 33.9871C9.39987 34.1628 9.49743 34.4 9.49741 34.6472Z" fill="#ADADAD"/><path d="M27.3072 50.5665C27.4933 50.5684 27.6747 50.6256 27.8282 50.7309C27.9817 50.8362 28.1004 50.9847 28.1692 51.1577C28.238 51.3306 28.2539 51.5201 28.2147 51.7021C28.1755 51.8841 28.083 52.0503 27.9491 52.1795C27.8152 52.3088 27.6459 52.3953 27.4626 52.4281C27.2794 52.4608 27.0906 52.4383 26.9201 52.3635C26.7497 52.2886 26.6054 52.1647 26.5056 52.0076C26.4058 51.8505 26.355 51.6672 26.3597 51.4812C26.3658 51.2348 26.4687 51.0008 26.646 50.8296C26.8233 50.6584 27.0608 50.5639 27.3072 50.5665Z" fill="#ADADAD"/><path d="M15.1491 20.7962C14.9041 20.7892 14.6709 20.6894 14.4967 20.517C14.3225 20.3445 14.2204 20.1123 14.2109 19.8674C14.2107 19.7456 14.2346 19.6249 14.2811 19.5123C14.3276 19.3997 14.3959 19.2974 14.4821 19.2113C14.5682 19.1251 14.6705 19.0569 14.7831 19.0103C14.8957 18.9638 15.0163 18.94 15.1382 18.9402C15.2604 18.9353 15.3824 18.9553 15.4967 18.9991C15.6109 19.0428 15.7151 19.1093 15.8029 19.1946C15.8906 19.2799 15.9601 19.3821 16.0071 19.4951C16.0542 19.608 16.0777 19.7294 16.0763 19.8518C16.078 20.0998 15.9814 20.3383 15.8076 20.5153C15.6339 20.6923 15.3971 20.7933 15.1491 20.7962Z" fill="#ADADAD"/><path d="M12.5239 44.0003C12.7705 44.0036 13.006 44.1038 13.1792 44.2794C13.3524 44.455 13.4496 44.6918 13.4495 44.9384C13.4378 45.1823 13.3346 45.4127 13.1604 45.5837C12.9861 45.7548 12.7538 45.8537 12.5098 45.8609C12.3878 45.8585 12.2675 45.8321 12.1558 45.7831C12.044 45.7342 11.943 45.6637 11.8585 45.5757C11.774 45.4877 11.7077 45.3839 11.6633 45.2703C11.6189 45.1567 11.5973 45.0354 11.5998 44.9134C11.5983 44.7921 11.6213 44.6718 11.6673 44.5596C11.7133 44.4475 11.7815 44.3457 11.8678 44.2605C11.9541 44.1752 12.0566 44.1082 12.1693 44.0635C12.2821 44.0188 12.4027 43.9973 12.5239 44.0003Z" fill="#ADADAD"/><path d="M37.5512 48.472C37.4298 48.4717 37.3097 48.4469 37.198 48.3992C37.0863 48.3515 36.9854 48.2817 36.9012 48.1942C36.817 48.1067 36.7513 48.0031 36.708 47.8897C36.6647 47.7762 36.6446 47.6552 36.649 47.5338C36.6552 47.2891 36.7567 47.0565 36.932 46.8856C37.1073 46.7147 37.3424 46.6191 37.5872 46.6191C37.8328 46.6322 38.0643 46.7382 38.2348 46.9156C38.4052 47.093 38.5018 47.3285 38.505 47.5745C38.4945 47.8189 38.3888 48.0496 38.2107 48.2172C38.0325 48.3849 37.7958 48.4763 37.5512 48.472Z" fill="#ADADAD"/><path d="M12.3314 24.0136C12.3333 24.1354 12.3106 24.2563 12.2647 24.3691C12.2188 24.4819 12.1506 24.5843 12.0642 24.6702C11.9777 24.756 11.8749 24.8235 11.7617 24.8687C11.6486 24.9139 11.5275 24.9357 11.4057 24.933C11.1588 24.9301 10.923 24.83 10.7494 24.6543C10.5758 24.4787 10.4785 24.2417 10.4785 23.9948C10.4864 23.7492 10.5881 23.516 10.7625 23.343C10.937 23.17 11.171 23.0703 11.4167 23.0645C11.5392 23.0663 11.6601 23.0923 11.7725 23.1411C11.8849 23.1899 11.9866 23.2604 12.0716 23.3486C12.1566 23.4368 12.2233 23.541 12.2679 23.6551C12.3125 23.7692 12.3341 23.8911 12.3314 24.0136Z" fill="#ADADAD"/><path d="M42.2341 43.3828C42.2333 43.6287 42.1387 43.8649 41.9695 44.0434C41.8004 44.2218 41.5695 44.3289 41.3241 44.3429C41.0788 44.3462 40.8423 44.2521 40.6664 44.0812C40.4905 43.9102 40.3896 43.6765 40.3859 43.4313C40.3798 43.3095 40.3983 43.1878 40.4404 43.0734C40.4825 42.959 40.5472 42.8543 40.6307 42.7655C40.7142 42.6768 40.8148 42.6058 40.9264 42.5568C41.038 42.5078 41.1584 42.4819 41.2803 42.4806C41.5257 42.4763 41.763 42.5684 41.9413 42.7371C42.1196 42.9057 42.2247 43.1375 42.2341 43.3828Z" fill="#ADADAD"/><path d="M16.6464 49.585C16.4017 49.5755 16.1699 49.4733 15.9979 49.299C15.826 49.1247 15.7269 48.8915 15.7207 48.6468C15.7252 48.4021 15.8265 48.1692 16.0023 47.999C16.1781 47.8287 16.4142 47.735 16.6589 47.7384C16.7815 47.7368 16.9031 47.7602 17.0165 47.807C17.1298 47.8539 17.2324 47.9233 17.3181 48.0111C17.4038 48.0988 17.4707 48.203 17.5149 48.3174C17.5591 48.4318 17.5796 48.554 17.5751 48.6765C17.5675 48.9185 17.4665 49.1482 17.2934 49.3175C17.1203 49.4868 16.8885 49.5827 16.6464 49.585Z" fill="#ADADAD"/><path d="M19.9729 16.1484C20.0949 16.1486 20.2156 16.1732 20.328 16.2207C20.4403 16.2682 20.542 16.3377 20.6271 16.4251C20.7122 16.5126 20.779 16.6161 20.8234 16.7297C20.8679 16.8433 20.8892 16.9646 20.8861 17.0866C20.8861 17.3324 20.7886 17.5681 20.6151 17.7422C20.4416 17.9163 20.2062 18.0145 19.9604 18.0154C19.7149 18.0105 19.481 17.9095 19.3091 17.734C19.1372 17.5586 19.041 17.3228 19.041 17.0772C19.0435 16.8311 19.1425 16.5958 19.3169 16.4221C19.4912 16.2483 19.7268 16.1501 19.9729 16.1484Z" fill="#ADADAD"/><path d="M10.6616 40.0715C10.6626 40.3172 10.5681 40.5537 10.398 40.7311C10.2279 40.9085 9.9956 41.0128 9.75004 41.0222C9.62826 41.0253 9.50707 41.0044 9.39338 40.9606C9.27969 40.9169 9.17573 40.8512 9.08744 40.7673C8.99916 40.6833 8.92827 40.5828 8.87885 40.4715C8.82942 40.3602 8.80241 40.2402 8.79937 40.1184C8.79518 39.9971 8.81539 39.8762 8.85879 39.7628C8.90219 39.6495 8.96791 39.546 9.05204 39.4585C9.13618 39.371 9.23702 39.3013 9.34859 39.2535C9.46016 39.2057 9.58019 39.1808 9.70156 39.1802C9.94689 39.1718 10.1856 39.2608 10.3655 39.4278C10.5454 39.5948 10.6518 39.8262 10.6616 40.0715Z" fill="#ADADAD"/><path d="M32.7352 49.4102C32.9821 49.4101 33.2191 49.5075 33.3947 49.6811C33.5703 49.8546 33.6705 50.0905 33.6733 50.3374C33.6734 50.5827 33.5773 50.8183 33.4058 50.9937C33.2342 51.169 33.0008 51.2702 32.7555 51.2755C32.6339 51.2774 32.5131 51.255 32.4003 51.2095C32.2874 51.1641 32.1848 51.0966 32.0985 51.0109C32.0121 50.9253 31.9437 50.8232 31.8973 50.7108C31.8509 50.5983 31.8274 50.4778 31.8283 50.3561C31.8237 50.1106 31.9165 49.8732 32.0865 49.6959C32.2564 49.5187 32.4897 49.4159 32.7352 49.4102Z" fill="#ADADAD"/><path d="M10.0806 29.1071C10.0528 29.3355 9.94196 29.5458 9.76924 29.6978C9.59651 29.8499 9.37394 29.9331 9.14383 29.9318C8.91372 29.9304 8.69213 29.8445 8.52121 29.6905C8.35029 29.5364 8.24195 29.3249 8.2168 29.0962C8.24463 28.8677 8.35545 28.6575 8.52817 28.5055C8.70089 28.3534 8.92347 28.2701 9.15358 28.2715C9.38368 28.2729 9.60527 28.3587 9.77619 28.5128C9.94712 28.6669 10.0555 28.8784 10.0806 29.1071Z" fill="#ADADAD"/><path d="M43.5753 37.3828C43.8208 37.3877 44.0547 37.4887 44.2266 37.6641C44.3985 37.8395 44.4947 38.0754 44.4947 38.321C44.4656 38.5493 44.3536 38.759 44.1799 38.9101C44.0063 39.0612 43.7832 39.1432 43.553 39.1405C43.3228 39.1378 43.1017 39.0506 42.9317 38.8954C42.7616 38.7403 42.6546 38.528 42.6309 38.2991C42.639 38.0538 42.7419 37.8212 42.9181 37.6503C43.0942 37.4794 43.3298 37.3835 43.5753 37.3828Z" fill="#ADADAD"/><path d="M22.6722 50.9366C22.6632 51.182 22.5592 51.4144 22.3821 51.5845C22.205 51.7546 21.9686 51.8492 21.7231 51.8482C21.4948 51.8174 21.2857 51.7037 21.1359 51.5288C20.986 51.3538 20.9057 51.1299 20.9103 50.8995C20.915 50.6692 21.0042 50.4486 21.161 50.2799C21.3178 50.1111 21.5312 50.0059 21.7606 49.9844C22.0064 49.9937 22.239 50.0983 22.4091 50.276C22.5792 50.4537 22.6736 50.6906 22.6722 50.9366Z" fill="#ADADAD"/></g><defs><clipPath id="clip0_6681_23082"><rect width="52.5541" height="60" fill="white"/></clipPath></defs></svg>`,
    };
    let icon = null;

    if (validityRemaining > thirtyDaysInMillis) {
      icon = icons.active;
    } else if (validityRemaining > oneDayInMillis) {
      icon = icons.alert;
    } else {
      icon = icons.urgent;
    }

    return icon;
  }
  packageValidityCountdown(targetTime) {
    const countdownElement = this.shadowRoot.getElementById("countdown");
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const remainingTime = targetTime - currentTime;
      const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
      const oneHourInMilliseconds = 1000 * 60 * 60;
      const oneMinuteInMilliseconds = 1000 * 60;

      if (remainingTime <= 0) {
        clearInterval(interval);
        countdownElement.textContent = "Expired";
        return;
      }

      let days = Math.floor(remainingTime / oneDayInMilliseconds);
      let hours = Math.floor((remainingTime % oneDayInMilliseconds) / oneHourInMilliseconds);
      let minutes = Math.floor((remainingTime % oneHourInMilliseconds) / oneMinuteInMilliseconds);
      let seconds = Math.floor((remainingTime % oneMinuteInMilliseconds) / 1000);

      days = (days <= 0 ? "00" : days) + "d";
      hours = (hours <= 0 ? "00" : hours) + "hr";
      minutes = (minutes <= 0 ? "00" : minutes) + "m";
      seconds = (seconds <= 0 ? "00" : seconds) + "s";

      countdownElement.textContent = `${days} : ${hours} : ${minutes} : ${seconds}`;
    }, 1000);
  }

  getToken() {
    let cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
      let cookieParts = cookie.split("=");
      if (cookieParts[0] === "_admin") {
        return cookieParts[1];
      }
    }
  }

  getExpiredTitle(time) {
    const validityRemaining = time - Date.now();
    const oneDayInMillis = 86400000;
    const thirtyDaysInMillis = oneDayInMillis * 30;
    let expiredTitle = "";
    if (validityRemaining > thirtyDaysInMillis) {
      expiredTitle = "";
    } else if (validityRemaining > oneDayInMillis) {
      expiredTitle = "";
    } else {
      expiredTitle = "Expired";
    }
    return expiredTitle;
  }
  async getPlan() {
    const token = this.getToken();
    if (token) {
      try {
        let res = await fetch("https://graphql.soppiya.com/admin", {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Authorization: token,
          },
          method: "POST",
          body: JSON.stringify({
            query:
              "query Plan {\r\n  plan {\r\n    active_from\r\n    active_till\r\n    is_on_trial\r\n    package {\r\n      title\r\n    }\r\n  }\r\n}",
            variables: {},
            operationName: "Plan",
          }),
        });
        let data = await res.json();
        return data.data;
      } catch (err) {
        return false;
      }
    }
    return false;
  }
  getButtonName(time) {
    const validityRemaining = time - Date.now();
    const oneDayInMillis = 86400000;
    const thirtyDaysInMillis = oneDayInMillis * 30;
    let buttonText = "View plan";
    if (validityRemaining > thirtyDaysInMillis) {
      buttonText = "View plan";
    } else if (validityRemaining > oneDayInMillis) {
      buttonText = "Upgrade plan";
    } else {
      buttonText = "Upgrade plan";
    }
    return buttonText;
  }
  getMessage(time) {
    const validityRemaining = time - Date.now();
    const oneDayInMillis = 86400000;
    const thirtyDaysInMillis = oneDayInMillis * 30;
    let message = "You are currently on Spark plan.";

    if (validityRemaining > thirtyDaysInMillis) {
      message = "You are currently on Spark plan.";
    } else if (validityRemaining > oneDayInMillis) {
      message =
        "Your Spark plan will expire in 10 days. Please upgrade your plan to experiance a seamless connectivity.";
    } else {
      message = "";
    }
    return message || "";
  }

  getPlanTemplate(plan) {
    const template = document.createElement("template");
    template.innerHTML = /*html*/ `
    <style>
    h3,
    p {
      margin: 0px;
    }
    .plan {
      background-color: #000000;
      padding: 16px;
      border-radius: 16px;
    }
    .plan_card {
      display: flex;
      gap: 12px;
      flex-direction: column;
    }
    .plan_icon {
      width: 55px;
    }

    .plan_content {
      display: flex;
      align-items: start;
      gap: 20px;
    }
    .plan_content h3 {
      color: #ffffff;
    }

    .title_wrapper {
      margin-bottom: 10px;
      display: flex;
      gap: 5px;
    }
    .title_wrapper .title,
    .expires_text {
      font-size: 13px;
      font-weight: 550;
      line-height: 21px;
    }
    .expires_text {
      color: #6d7175;
      margin-top: -1px;
    }
    .description_wrapper .description {
      font-size: 12px;
      font-weight: 450;
      line-height: 21px;
      color: #c6c6c6;
    }
    .plan_button {
      margin-top: 10px;
    }
    .plan_button button {
      font-size: 12px;
      border: none;
      outline: none;
      padding: 6px 16px;
      border-radius: 8px;
      background: #303030;
      color: #ffffff;
    }
    #countdown {
      font-size: 20px;
      font-weight: 650;
      color: #c6c6c6;
    }
    @media (min-width: 768px) {
      .plan_card {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
      .plan_button {
        margin-top: 0px;
      }
    }
    @media (min-width: 768px) {
      a{
        display:block;
        cursor:pointer;
      }
    }
  </style>
    
    <div class="plan">
      <div class="plan_card">
        <div class="plan_content">
          <div class="plan_icon" id="plan_icon">${this.getIcon(plan.active_till)}</div>
          <div class="content_column">
            <div class="title_wrapper">
              <h3 class="title" id="title">${plan.package.title}</h3>
              <p class="expires_text" id="expires_text"> ${this.getExpiredTitle(plan.active_till)}</p>
            </div>
            <div class="description_wrapper">
              <p class="description" > ${this.getMessage(plan.active_till)}</p>
              <div>
                <p id="countdown"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="plan_button">
          <a href="https://admin.soppiya.com/settings/plan"><button class="button" id="button">${this.getButtonName(
            plan.active_till
          )}</button></a>
        </div>
      </div>
    </div>
    `;
    return template;
  }

  async connectedCallback() {
    const data = await this.getPlan();

    this.shadowRoot.appendChild(this.getPlanTemplate(data.plan).content.cloneNode(true));

    if (data.plan.active_till - Date.now() <= 1000 * 60 * 60 * 24 * 30) {
      this.packageValidityCountdown(data.plan.active_till);
    }
  }
}
customElements.define("plan-widget", PlanWidget);