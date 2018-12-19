var redirectURL = [
  [
    "https://www.muchimemo.com/entry/2018/11/30/054245",
    "https://www.muchimemo.com/entry/couple/split_the_housework"
  ],
  [
    "https://www.muchimemo.com/entry/2018/12/01/141225",
    "https://www.muchimemo.com/entry/adrien_english/so_this_is_christmas/chapter4"
  ],
  [
    "https://www.muchimemo.com/entry/2018/11/27/073405",
    "https://www.muchimemo.com/entry/adrien_english/so_this_is_christmas/chapter3"
  ],
  [
    "https://www.muchimemo.com/entry/2018/11/24/104841",
    "https://www.muchimemo.com/entry/adrien_english/so_this_is_christmas/chapter2"
  ],
  [
    "https://www.muchimemo.com/entry/2018/11/21/022458",
    "https://www.muchimemo.com/entry/adrien_english/so_this_is_christmas/chapter1"
  ],
  [
    "https://www.muchimemo.com/entry/2018/10/03/160044",
    "https://www.muchimemo.com/entry/adrien_english/fatal_shadows/chapter2"
  ],
  [
    "https://www.muchimemo.com/entry/2018/09/21/043816",
    "https://www.muchimemo.com/entry/adrien_english/fatal_shadows/chapter1"
  ],
  [
    "https://www.muchimemo.com/entry/2018/09/22/090452",
    "https://www.muchimemo.com/entry/adrien_english/adrien_jake_image"
  ],
  [
    "https://www.muchimemo.com/entry/2018/09/20/073419",
    "https://www.muchimemo.com/entry/adrien_english/introduction"
  ]
];

for (var i = 0; i < redirectURL.length; ++i) {
  if (location.href == redirectURL[i][0]) {
    setTimeout(function() {
      location.href = redirectURL[i][1];
    }, 0);
    break;
  }
}
