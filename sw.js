/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "004a46017d377e7734e0eca46de51182/chart.png",
    "revision": "004a46017d377e7734e0eca46de51182"
  },
  {
    "url": "00ada3a0b7909c3685e5f3ee618354a7/SixCharts.png",
    "revision": "00ada3a0b7909c3685e5f3ee618354a7"
  },
  {
    "url": "01579fc6bcf79816d64a0582fa031024/geompoint.png",
    "revision": "01579fc6bcf79816d64a0582fa031024"
  },
  {
    "url": "02aa206361a969b42d3e3be18d3bdb27/pieChart1.png",
    "revision": "02aa206361a969b42d3e3be18d3bdb27"
  },
  {
    "url": "03add7995000b7d9481edf50fcf4db44/Fig5.png",
    "revision": "03add7995000b7d9481edf50fcf4db44"
  },
  {
    "url": "03c527059118084d790ccdfb4cd035c0/index.mdx",
    "revision": "03c527059118084d790ccdfb4cd035c0"
  },
  {
    "url": "0412015cc95239518bd5b737cb1a95e8/solution_2.png",
    "revision": "0412015cc95239518bd5b737cb1a95e8"
  },
  {
    "url": "063685adcac7fa42b8d4541c215a191d/distPlot.png",
    "revision": "063685adcac7fa42b8d4541c215a191d"
  },
  {
    "url": "091640c09052a74cdcd49e4735bdcfc8/dash_example.py",
    "revision": "091640c09052a74cdcd49e4735bdcfc8"
  },
  {
    "url": "09555539ce1d05bc69f04cab08f3a4de/rstudio1.png",
    "revision": "09555539ce1d05bc69f04cab08f3a4de"
  },
  {
    "url": "0cd46bd50718bbf6d7affeef5e4ead0e/Fig6.png",
    "revision": "0cd46bd50718bbf6d7affeef5e4ead0e"
  },
  {
    "url": "0e5fc84217eed1acad88e7b3ede67db4/output_12_0.png",
    "revision": "0e5fc84217eed1acad88e7b3ede67db4"
  },
  {
    "url": "11630fecaaf89cc47d3f52781145af09/helen_k.jpg",
    "revision": "11630fecaaf89cc47d3f52781145af09"
  },
  {
    "url": "1215f4af5f5515e9b936876cd4b8a4ef/Fig1.png",
    "revision": "1215f4af5f5515e9b936876cd4b8a4ef"
  },
  {
    "url": "1603883dc8ae140f22adf5bc4b78c3a7/Fig6.png",
    "revision": "1603883dc8ae140f22adf5bc4b78c3a7"
  },
  {
    "url": "1a73ca4ce2a3b95a68d9595f4234a6fe/Fig3.png",
    "revision": "1a73ca4ce2a3b95a68d9595f4234a6fe"
  },
  {
    "url": "1b8e2c8856a46f00b17ea24b776b551a/pop_2020.png",
    "revision": "1b8e2c8856a46f00b17ea24b776b551a"
  },
  {
    "url": "1b950aec9371d81fecb003f21d10c274/Seb_J.jpg",
    "revision": "1b950aec9371d81fecb003f21d10c274"
  },
  {
    "url": "1bfc9850-23cd5f3773e76fa97c13.js"
  },
  {
    "url": "1bfc9850-23cd5f3773e76fa97c13.js.map",
    "revision": "98e9c9dde8d00923f9728a71f20604ca"
  },
  {
    "url": "21ef03c1345f4938ec8cbc8213dea1da/img2.png",
    "revision": "21ef03c1345f4938ec8cbc8213dea1da"
  },
  {
    "url": "249b847b0b04f50303b758b0cfc4322a/img10.png",
    "revision": "249b847b0b04f50303b758b0cfc4322a"
  },
  {
    "url": "252f366e-d92828dac3ebd402255a.js"
  },
  {
    "url": "252f366e-d92828dac3ebd402255a.js.map",
    "revision": "d6062150600a5a785f7738cdca4c6491"
  },
  {
    "url": "25fffed93c38f0fc849f23da47ea66ae/Deviation2.png",
    "revision": "25fffed93c38f0fc849f23da47ea66ae"
  },
  {
    "url": "276e0489d64046d0d473e8b3979836ee/img9.gif",
    "revision": "276e0489d64046d0d473e8b3979836ee"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-9a68fc35db5864525436.js"
  },
  {
    "url": "2a30559cdac468cd72e241dbe4c461b4d147bff4-9a68fc35db5864525436.js.map",
    "revision": "b7498ca11452b3001558f36a5ed8d9f2"
  },
  {
    "url": "2b34a3ff3736da40afaf4b7a5922ddb9/login_long.jpg",
    "revision": "2b34a3ff3736da40afaf4b7a5922ddb9"
  },
  {
    "url": "2bf6dba5826fee778687508fa6fa4cd9/img2.png",
    "revision": "2bf6dba5826fee778687508fa6fa4cd9"
  },
  {
    "url": "2f65514bfd69f65c21ff39924ffc41f5/img5.png",
    "revision": "2f65514bfd69f65c21ff39924ffc41f5"
  },
  {
    "url": "33cf97e05704742911a9dac9d61fd0ab/sp_lm.png",
    "revision": "33cf97e05704742911a9dac9d61fd0ab"
  },
  {
    "url": "33ff4d58f81a9ab1b3bdc1992b7a54b4/img_3.svg",
    "revision": "33ff4d58f81a9ab1b3bdc1992b7a54b4"
  },
  {
    "url": "355459c0a3aefbf39ca1dd9825f3cfcd/output_18_0.png",
    "revision": "355459c0a3aefbf39ca1dd9825f3cfcd"
  },
  {
    "url": "36-f8f03d9bf44ed4467241.js"
  },
  {
    "url": "36-f8f03d9bf44ed4467241.js.map",
    "revision": "a1371748e0140fda36e8a98341912fcd"
  },
  {
    "url": "3a0a47071faee2b02596b6414cb67d1c/scatterPlot.png",
    "revision": "3a0a47071faee2b02596b6414cb67d1c"
  },
  {
    "url": "3cda13cd4a0d1370ed8e128035832649/Fig1.png",
    "revision": "3cda13cd4a0d1370ed8e128035832649"
  },
  {
    "url": "3ce731ab8936ea743b40af6e9f0211b3/requirements.txt",
    "revision": "3ce731ab8936ea743b40af6e9f0211b3"
  },
  {
    "url": "3d8d262d17d26040d10a48a428c74098/img6.png",
    "revision": "3d8d262d17d26040d10a48a428c74098"
  },
  {
    "url": "3d980ef5e583bbb3a8c271f16a7b8847/barPlot.png",
    "revision": "3d980ef5e583bbb3a8c271f16a7b8847"
  },
  {
    "url": "3e5c819d98181d0f0d3a619b42137200/TypesofData.png",
    "revision": "3e5c819d98181d0f0d3a619b42137200"
  },
  {
    "url": "404.html",
    "revision": "9703f31c03592b959fa46f51c45f9749"
  },
  {
    "url": "404/index.html",
    "revision": "dd8b0fb3f5e68f9fc2b2bafd7de3e2ad"
  },
  {
    "url": "4117d2db42604660cb5b36f843e70ea8/img1.png",
    "revision": "4117d2db42604660cb5b36f843e70ea8"
  },
  {
    "url": "42aaaee73ba23c1b9ac8d40c1d5f4374/img9.png",
    "revision": "42aaaee73ba23c1b9ac8d40c1d5f4374"
  },
  {
    "url": "45401ff2e6ab69d21b0b06f968e7aad8/rstudio4.png",
    "revision": "45401ff2e6ab69d21b0b06f968e7aad8"
  },
  {
    "url": "45b10ed8990621b80e20eb4dac89e4b3/thumb1.png",
    "revision": "45b10ed8990621b80e20eb4dac89e4b3"
  },
  {
    "url": "45e9eea1cb6ade247b97083786de51ac/img1.jpg",
    "revision": "45e9eea1cb6ade247b97083786de51ac"
  },
  {
    "url": "48c5cb70039984134e6f5b953d14daf5/Fig2.png",
    "revision": "48c5cb70039984134e6f5b953d14daf5"
  },
  {
    "url": "4bbb4c91d242c019e5da5737f2ef08b6/img8.png",
    "revision": "4bbb4c91d242c019e5da5737f2ef08b6"
  },
  {
    "url": "4da94c4de0594df65b731a4b475d47a6/img12.png",
    "revision": "4da94c4de0594df65b731a4b475d47a6"
  },
  {
    "url": "503d8eb81732a0fe3895c085d0c467c1/pieChart2.png",
    "revision": "503d8eb81732a0fe3895c085d0c467c1"
  },
  {
    "url": "510358d2a23ab4d63c159f88163bf659/shiny1.png",
    "revision": "510358d2a23ab4d63c159f88163bf659"
  },
  {
    "url": "52af90610c20172c99ecad6da466a1fa/esquisse.png",
    "revision": "52af90610c20172c99ecad6da466a1fa"
  },
  {
    "url": "52d4677e3ba0379f6160744cf6d82782/Fig7.jpg",
    "revision": "52d4677e3ba0379f6160744cf6d82782"
  },
  {
    "url": "5689f79c3025dc9033dd560f73a3a5d7/img1.png",
    "revision": "5689f79c3025dc9033dd560f73a3a5d7"
  },
  {
    "url": "57c336a98a9423d616752f3480dbb538/FrenchWine2.png",
    "revision": "57c336a98a9423d616752f3480dbb538"
  },
  {
    "url": "57c35a5e477247a7420e0dbe29395223/output_30_0.png",
    "revision": "57c35a5e477247a7420e0dbe29395223"
  },
  {
    "url": "58045623acf68358ed63be86cba585d7/Fig1.png",
    "revision": "58045623acf68358ed63be86cba585d7"
  },
  {
    "url": "5883c03e32c83fa3188bccea05494e24/stats.png",
    "revision": "5883c03e32c83fa3188bccea05494e24"
  },
  {
    "url": "58e9e33dad5576b13b6314440053cc6b/Fig3.png",
    "revision": "58e9e33dad5576b13b6314440053cc6b"
  },
  {
    "url": "59ef11ce06c4d4c45a11483da891845d/output_28_1.png",
    "revision": "59ef11ce06c4d4c45a11483da891845d"
  },
  {
    "url": "5ba6f7e717ca64cbf5698d6b49958983/Theme1.png",
    "revision": "5ba6f7e717ca64cbf5698d6b49958983"
  },
  {
    "url": "5e1f724a34e4fbbf340dba4410840a49/output_26_1.png",
    "revision": "5e1f724a34e4fbbf340dba4410840a49"
  },
  {
    "url": "5e2a4920-28e0dfa664c65a2dc86c.js"
  },
  {
    "url": "5e2a4920-28e0dfa664c65a2dc86c.js.map",
    "revision": "8e801716391211329552a52aaa5ee37c"
  },
  {
    "url": "603e72ea82932164d1edff27806072a2/Relationship1.png",
    "revision": "603e72ea82932164d1edff27806072a2"
  },
  {
    "url": "65ff790df8b54fe3fd536b5477c1dccd/boxPlot.png",
    "revision": "65ff790df8b54fe3fd536b5477c1dccd"
  },
  {
    "url": "6728d85a-80efe8c932799e59b23d.js"
  },
  {
    "url": "6728d85a-80efe8c932799e59b23d.js.map",
    "revision": "9b85318eadeb122d3ab9336318a7a692"
  },
  {
    "url": "6b92068021148e585085ecf6ef9f5d77/img8.png",
    "revision": "6b92068021148e585085ecf6ef9f5d77"
  },
  {
    "url": "6cca3b30969784cf299c198a765827a5/sp_subset.png",
    "revision": "6cca3b30969784cf299c198a765827a5"
  },
  {
    "url": "6de14820c819b82ca826e9f42b769237/columnChart.png",
    "revision": "6de14820c819b82ca826e9f42b769237"
  },
  {
    "url": "6dfb4a1ec3e5661f8105cf2cfe33aa41/scatterPlot.png",
    "revision": "6dfb4a1ec3e5661f8105cf2cfe33aa41"
  },
  {
    "url": "6f3ed93fe3e6ea21b26c15df4b34c525/Fig1.png",
    "revision": "6f3ed93fe3e6ea21b26c15df4b34c525"
  },
  {
    "url": "757cea458fb7bd13c92287aadae2f076/lineChart.png",
    "revision": "757cea458fb7bd13c92287aadae2f076"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js"
  },
  {
    "url": "78e521c3-c2e7506ec8b9abde991b.js.map",
    "revision": "1008e434f013a48014718f5522d15f8a"
  },
  {
    "url": "7927f9558ed6828a07491f06aa7e9919/groupby.png",
    "revision": "7927f9558ed6828a07491f06aa7e9919"
  },
  {
    "url": "7a10acfa924e70cf856c7190addf70b6/output_20_1.png",
    "revision": "7a10acfa924e70cf856c7190addf70b6"
  },
  {
    "url": "7b63819be61e87cba1590a679ad84c1a/Heatmap1.png",
    "revision": "7b63819be61e87cba1590a679ad84c1a"
  },
  {
    "url": "7d49b884781ef1a79e72350e2cc35570/data1.png",
    "revision": "7d49b884781ef1a79e72350e2cc35570"
  },
  {
    "url": "7f9e9b7fc7a37ade6ddd71600d8a792a/Heatmap2.png",
    "revision": "7f9e9b7fc7a37ade6ddd71600d8a792a"
  },
  {
    "url": "869b12657a2969845f875e26f3c08591/login_sm2.jpg",
    "revision": "869b12657a2969845f875e26f3c08591"
  },
  {
    "url": "877f6d0fb7b8bec8f1028e050ed35dc6/Fig4.png",
    "revision": "877f6d0fb7b8bec8f1028e050ed35dc6"
  },
  {
    "url": "8ae492f912e3fc4c59b0e2bb6816e688/Fig3.png",
    "revision": "8ae492f912e3fc4c59b0e2bb6816e688"
  },
  {
    "url": "8df2d8c7fa72b24df31c141700f56dbe/Compare.png",
    "revision": "8df2d8c7fa72b24df31c141700f56dbe"
  },
  {
    "url": "8e2cff7e8c5486703c4a615fead939e8/Histogram1.png",
    "revision": "8e2cff7e8c5486703c4a615fead939e8"
  },
  {
    "url": "8e700d79fa76b0cb5e6e610b99b79488/edward_itineraryCUMULATIVE.gif",
    "revision": "8e700d79fa76b0cb5e6e610b99b79488"
  },
  {
    "url": "8e98fa8ec906378e09ae926f5f398d4e/pipes.png",
    "revision": "8e98fa8ec906378e09ae926f5f398d4e"
  },
  {
    "url": "8f09fab6cb79bc5f33f737ffdac49453/img_2.png",
    "revision": "8f09fab6cb79bc5f33f737ffdac49453"
  },
  {
    "url": "8f5182aa0891f286cffa20a6e1851192/map_visualisation_presentation.jpg",
    "revision": "8f5182aa0891f286cffa20a6e1851192"
  },
  {
    "url": "8f52df9ea57cb90343719493401d6886/waterfall.png",
    "revision": "8f52df9ea57cb90343719493401d6886"
  },
  {
    "url": "93f2baa05deeebef7e263a2ff9ac1306/lattice1.png",
    "revision": "93f2baa05deeebef7e263a2ff9ac1306"
  },
  {
    "url": "95091254e14f48542c6dd64954c1b0a0/ggpubr.png",
    "revision": "95091254e14f48542c6dd64954c1b0a0"
  },
  {
    "url": "95b64a6e-b344a49f88fc5cc30cc4.js"
  },
  {
    "url": "95b64a6e-b344a49f88fc5cc30cc4.js.map",
    "revision": "4f73ec1191f7143c0efc830d6ad4f66f"
  },
  {
    "url": "979495879b0b2a87ffced73604a45f648734915f-aa9905c6994831649257.js"
  },
  {
    "url": "979495879b0b2a87ffced73604a45f648734915f-aa9905c6994831649257.js.map",
    "revision": "f44e3c984a00c6ec2857743fa4a00768"
  },
  {
    "url": "98a599ca4a0880f25a77b618bc1ed9da/participants.jpg",
    "revision": "98a599ca4a0880f25a77b618bc1ed9da"
  },
  {
    "url": "99697d4401da93ee66ffc2a8aaa815b1/output_10_1.png",
    "revision": "99697d4401da93ee66ffc2a8aaa815b1"
  },
  {
    "url": "998b79439819a4d1afc62c66b120d076/img4.png",
    "revision": "998b79439819a4d1afc62c66b120d076"
  },
  {
    "url": "999bd8b8776d289d6ab0a525ed66722e/filtermpg.png",
    "revision": "999bd8b8776d289d6ab0a525ed66722e"
  },
  {
    "url": "9bbf8a8a7682203dc5ecb06a813fd631/lattice2.png",
    "revision": "9bbf8a8a7682203dc5ecb06a813fd631"
  },
  {
    "url": "9bed7912d99f2b67ca7f100b1e8864fc/Fig3.png",
    "revision": "9bed7912d99f2b67ca7f100b1e8864fc"
  },
  {
    "url": "9c9987e4871318a22b3060b9f012101e/img11.png",
    "revision": "9c9987e4871318a22b3060b9f012101e"
  },
  {
    "url": "a0f1a88da99c38bdb88ff0985519a90a/Fig2.png",
    "revision": "a0f1a88da99c38bdb88ff0985519a90a"
  },
  {
    "url": "a2f50b4c8376723eff793a09b27a6b1b/lattice3.png",
    "revision": "a2f50b4c8376723eff793a09b27a6b1b"
  },
  {
    "url": "a2f93de9a8e200af0de860d457e88ba6/Panel.png",
    "revision": "a2f93de9a8e200af0de860d457e88ba6"
  },
  {
    "url": "a44240697a5f55109c51dfebab7b3395/Fig2.png",
    "revision": "a44240697a5f55109c51dfebab7b3395"
  },
  {
    "url": "a644408106b079620ca4a349f4cc66e5/Kickstarter2.png",
    "revision": "a644408106b079620ca4a349f4cc66e5"
  },
  {
    "url": "a77f1c01b608ab4c9892bef2da4eb962/img14.png",
    "revision": "a77f1c01b608ab4c9892bef2da4eb962"
  },
  {
    "url": "a84ec2294a8faf9b5e0965967d602659/summary.png",
    "revision": "a84ec2294a8faf9b5e0965967d602659"
  },
  {
    "url": "a8e5249bdeab577fdedce16e359f5195/Fig4.png",
    "revision": "a8e5249bdeab577fdedce16e359f5195"
  },
  {
    "url": "a90d453ec8e29ba2f6bd65dbbd1305aa/mutateMpg.png",
    "revision": "a90d453ec8e29ba2f6bd65dbbd1305aa"
  },
  {
    "url": "about/index.html",
    "revision": "0d8451081a9dc783f964d4a68e218cf6"
  },
  {
    "url": "acc11559c25bce5ee3d9a689a3c602a8/output_14_1.png",
    "revision": "acc11559c25bce5ee3d9a689a3c602a8"
  },
  {
    "url": "accessibility/index.html",
    "revision": "abba4ae0c7dc647c4d474aceebf743b2"
  },
  {
    "url": "adb95786ee5c22fc51746113cb541f06/Fig4.png",
    "revision": "adb95786ee5c22fc51746113cb541f06"
  },
  {
    "url": "app-c9faf21b85d4767fa6ab.js"
  },
  {
    "url": "app-c9faf21b85d4767fa6ab.js.map",
    "revision": "c9a5cb4d8bc5ef9f822197cd27fb0821"
  },
  {
    "url": "b06b83e0afecc264170eb629af8026bd/WrongColors2.png",
    "revision": "b06b83e0afecc264170eb629af8026bd"
  },
  {
    "url": "b35659b84c41c4f894d576a4dc178f20/Distribution1.png",
    "revision": "b35659b84c41c4f894d576a4dc178f20"
  },
  {
    "url": "b4cbf28e22e521e30c82125257f309ca/temp.jpg",
    "revision": "b4cbf28e22e521e30c82125257f309ca"
  },
  {
    "url": "b57d713814fc11972668c31d02f15fa7/Script.r",
    "revision": "b57d713814fc11972668c31d02f15fa7"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-672df63096efe4cd0a30.js"
  },
  {
    "url": "b61db77957c3e40a060bcd965981abe3ffcc4463-672df63096efe4cd0a30.js.map",
    "revision": "f4ccd64eed5bf43532b954bcda0951b8"
  },
  {
    "url": "b6f2fe82a2458ef1e089e6f3cdacff6a/Fig4.png",
    "revision": "b6f2fe82a2458ef1e089e6f3cdacff6a"
  },
  {
    "url": "b7d165f1f79ad6a4c4a0b6d9cac7a5b6/Histogram2.png",
    "revision": "b7d165f1f79ad6a4c4a0b6d9cac7a5b6"
  },
  {
    "url": "b7ff330670970d127561ca52bc9d8efe/rstudio2.png",
    "revision": "b7ff330670970d127561ca52bc9d8efe"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-6da8a1e1a33d31e07993.js"
  },
  {
    "url": "b8c96b2759c5b03ab532f845763593a159638be8-6da8a1e1a33d31e07993.js.map",
    "revision": "046f827e26eb728e95086b0cba5363ad"
  },
  {
    "url": "b98bc7c3-0073e86f6c60b4c7b6fb.js"
  },
  {
    "url": "b98bc7c3-0073e86f6c60b4c7b6fb.js.map",
    "revision": "422c1f2ec266a3b168e8c8739a256b69"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-02eeda2d64d66cf1bc5a.js"
  },
  {
    "url": "b98fb34dd6d589090edc356d94cc1025f084f9f4-02eeda2d64d66cf1bc5a.js.map",
    "revision": "85a7a8708db106e1f7fa3e2633071e06"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js"
  },
  {
    "url": "bab4896a-d9f0e342396e339e7669.js.map",
    "revision": "b0b7d081034c2bd77337841dcb2f5505"
  },
  {
    "url": "bf46a6306417222dee5db2f226df3951/img7.png",
    "revision": "bf46a6306417222dee5db2f226df3951"
  },
  {
    "url": "blog/01/06/2020/visualising-high-risk-areas-for-covid-19-mortality/index.html",
    "revision": "2c5015a22b31ee2847e967650d30842b"
  },
  {
    "url": "blog/02/05/2020/dataviz-stats-1/index.html",
    "revision": "962a3d7a5d2600fd7c3a65d98e06987e"
  },
  {
    "url": "blog/03/07/2020/Deploy-Your-Dash-App/index.html",
    "revision": "3b375a5b5128ddb603162ec4031aab12"
  },
  {
    "url": "blog/03/07/2020/LearningPath-Introduction/index.html",
    "revision": "fecd5df3805a8477ac19f98655b0d637"
  },
  {
    "url": "blog/04/06/2020/dash-tutorial/index.html",
    "revision": "3dd1294d5abf37c1c0506c97cd20f11a"
  },
  {
    "url": "blog/04/07/2020/LearningPath-Lab/index.html",
    "revision": "02626be3d77f73d0b6b7b7ac7b934b38"
  },
  {
    "url": "blog/05/02/2021/Shiny-Template/index.html",
    "revision": "ae8d7c63b5ff4c92dc1ed35ba02aebf6"
  },
  {
    "url": "blog/05/07/2020/LearningPath-Workflow/index.html",
    "revision": "b339b0698d7410b31b3e76aa2561da10"
  },
  {
    "url": "blog/05/09/2020/challenges-in-visualising-data/index.html",
    "revision": "695abb23ab3d33ae65f1e97f6867df66"
  },
  {
    "url": "blog/06/04/2020/chart-choice/index.html",
    "revision": "63da5cc6749fc1cf1580f02f853d2b99"
  },
  {
    "url": "blog/06/05/2020/Colour-Schemes/index.html",
    "revision": "cbf2e377e199f9cc356733066532a54e"
  },
  {
    "url": "blog/07/05/2020/dataviz-stats-2/index.html",
    "revision": "848916b3372308e48a73b495831b4ded"
  },
  {
    "url": "blog/08/10/2020/moving-from-excel-to-r/index.html",
    "revision": "84183c7bcfa9899f275b7805090b7ec8"
  },
  {
    "url": "blog/09/09/2020/data-visualizations-social-role/index.html",
    "revision": "973fba49fb1cba8ba75f37d79ebaf005"
  },
  {
    "url": "blog/11/06/2020/simple-data-visualisations-have-become-key-to-communicating-about-the-COVID-19-pandemic/index.html",
    "revision": "def108df2c8b4df771e71a236f8de11b"
  },
  {
    "url": "blog/12/06/2020/dash-tutorial-2/index.html",
    "revision": "6070a02caa2e02013ccc6ed10f6a43fa"
  },
  {
    "url": "blog/15/01/2021/Data-Processing-In-R/index.html",
    "revision": "37912e557d8953575849a05deecb9357"
  },
  {
    "url": "blog/16/06/2020/Jupyter-Widgets/index.html",
    "revision": "4b5891cdaf65e1669b31b95615194155"
  },
  {
    "url": "blog/16/07/2020/python-visualisation-templates/index.html",
    "revision": "408d4948271d3aac27bfed56e970d1b0"
  },
  {
    "url": "blog/18/08/2020/GM/index.html",
    "revision": "a7490b79ff5214237fffc97bbf6a498f"
  },
  {
    "url": "blog/20/01/2021/Static-Visualisations-In-R/index.html",
    "revision": "ab5bcdd9406880adc850a16f6a1795d6"
  },
  {
    "url": "blog/20/05/2020/Non-Numeric/index.html",
    "revision": "330891da2880302fae4b2a4eef4bcdf8"
  },
  {
    "url": "blog/22/03/2020/contribute-blog-post/index.html",
    "revision": "65c194610d5fb720cabe5d1868caa7ca"
  },
  {
    "url": "blog/22/03/2020/datavizhub-guide/index.html",
    "revision": "a9af78c5d706af142fd7462996ba2a3e"
  },
  {
    "url": "blog/24/06/2020/host-jupyter-notebook/index.html",
    "revision": "b4247fb476ca064b40b1b3c25d02dac2"
  },
  {
    "url": "blog/25/01/2021/Morphologica/index.html",
    "revision": "edb26fb99cfb821f8ef8eead5b6e0315"
  },
  {
    "url": "blog/26/08/2020/D3js-for-data-visualisation/index.html",
    "revision": "afe4f6939b3795039b71e4e0ee901b21"
  },
  {
    "url": "blog/27/01/2021/Interactive-Visualisations-In-R/index.html",
    "revision": "0a342c9737201db086820db29450969c"
  },
  {
    "url": "blog/28/02/2020/Urban-Observatories-hackathon/index.html",
    "revision": "39b7eaeea7f81a15728916d9ac907f3a"
  },
  {
    "url": "blog/30/09/2020/making-the-best-data-visualisations-in-excel/index.html",
    "revision": "ca20e79b27c9d4db061057ff20267a6d"
  },
  {
    "url": "blog/category/articles/index.html",
    "revision": "0df96a1477b2c05e7b719efb2a28daaa"
  },
  {
    "url": "blog/category/articles/page/2/index.html",
    "revision": "e869e8739bebe83755a1ad090e32c77c"
  },
  {
    "url": "blog/category/events/index.html",
    "revision": "aa53277d418dad549beaadba0d539c3f"
  },
  {
    "url": "blog/category/tutorial/index.html",
    "revision": "dac2a208e369ca2e4274686f9e0fb57b"
  },
  {
    "url": "blog/index.html",
    "revision": "7c2514cbf2df6682b4f4cb904fad4397"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "ec36167a5ccf8396ad7714373ef2fe61"
  },
  {
    "url": "blog/page/3/index.html",
    "revision": "668521f55c9ca7a4a7c10671467eaec6"
  },
  {
    "url": "blog/tag/best-practice/index.html",
    "revision": "df7a93d451c29792d051754dcd8700ed"
  },
  {
    "url": "blog/tag/blog/index.html",
    "revision": "6046a0ec49a73d2a662fa2a87766b432"
  },
  {
    "url": "blog/tag/c/index.html",
    "revision": "1022186b9549d4ad15e9a7be14de6d8c"
  },
  {
    "url": "blog/tag/covid-19-mortality/index.html",
    "revision": "3350dcd489d784e2f0130c8eca60fc4a"
  },
  {
    "url": "blog/tag/covid-19-virus-sars-co-v-2/index.html",
    "revision": "f6b3986771a5b331dd26e03bd8cb4a0b"
  },
  {
    "url": "blog/tag/d-3-js/index.html",
    "revision": "ccdac15d0c145219964452426e271d89"
  },
  {
    "url": "blog/tag/dash/index.html",
    "revision": "38d9f31899772b4d21f30a4c97a9dede"
  },
  {
    "url": "blog/tag/data-analytics/index.html",
    "revision": "ac25d9c79ace010222f0019b27ff729c"
  },
  {
    "url": "blog/tag/data-engineering/index.html",
    "revision": "7b8dee6340f043aa689b8945aa474e66"
  },
  {
    "url": "blog/tag/data-politics/index.html",
    "revision": "2c7e42acc07824cca521436673fe9ef2"
  },
  {
    "url": "blog/tag/dataviz/index.html",
    "revision": "0221a7a1b88e389733a1e1fee0438edb"
  },
  {
    "url": "blog/tag/deploy/index.html",
    "revision": "adccbefa78f7418114d18b843026d2c6"
  },
  {
    "url": "blog/tag/effectiveness/index.html",
    "revision": "479598a8156dc0b221643eaf50d1ac3f"
  },
  {
    "url": "blog/tag/effects/index.html",
    "revision": "eb06a0da86464c0b22ecb7337dccca3e"
  },
  {
    "url": "blog/tag/emotions/index.html",
    "revision": "500ddb37a8d3717813340fd43e5bc48b"
  },
  {
    "url": "blog/tag/engaging-with-dataviz/index.html",
    "revision": "b36397fd72f35697db2c88ccdd864a00"
  },
  {
    "url": "blog/tag/epidemiology/index.html",
    "revision": "76815645e072208b07bd25f40c6fe4df"
  },
  {
    "url": "blog/tag/excel/index.html",
    "revision": "a37717b3b2f678a3c62f3fdf95fb66d7"
  },
  {
    "url": "blog/tag/ggplot-2/index.html",
    "revision": "b645a973788adefd20a60ecbb1582512"
  },
  {
    "url": "blog/tag/ggpubr/index.html",
    "revision": "36978c03b4578bafe4ff3553d5f58d83"
  },
  {
    "url": "blog/tag/heroku/index.html",
    "revision": "ec1e5f17eb338fd30abdcfdd82ce873c"
  },
  {
    "url": "blog/tag/host/index.html",
    "revision": "15f18dd8dc50f68da30559a1d5874395"
  },
  {
    "url": "blog/tag/html/index.html",
    "revision": "bb856650f0781eb7d2e50cee3cd360eb"
  },
  {
    "url": "blog/tag/interactive/index.html",
    "revision": "1137b6430647d9ce24c77a23ba6978d9"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "77afbc4797b25e2ddfcc1b71638f87ca"
  },
  {
    "url": "blog/tag/jupyter-notebook/index.html",
    "revision": "aa206e28d7ca224a02e9dc8f7931e3dc"
  },
  {
    "url": "blog/tag/jupyter-widgets/index.html",
    "revision": "80142fb8430192c4f9e14bebecf9e81d"
  },
  {
    "url": "blog/tag/lattice/index.html",
    "revision": "a99760dfc95faf88deab30bc054cef71"
  },
  {
    "url": "blog/tag/markdown/index.html",
    "revision": "c503ddeb74e2b9c064570bbd7759a9ee"
  },
  {
    "url": "blog/tag/pandas/index.html",
    "revision": "4ceeac8bd76eb0aebabae93665fddfc1"
  },
  {
    "url": "blog/tag/pandemic/index.html",
    "revision": "98362d60570ec5211960ef2a7e617a66"
  },
  {
    "url": "blog/tag/plotly/index.html",
    "revision": "260d8cc922b055d7fcea0dfa76a22cb6"
  },
  {
    "url": "blog/tag/python/index.html",
    "revision": "97c592a1fd03b1275e5a35c609870aa8"
  },
  {
    "url": "blog/tag/r/index.html",
    "revision": "dd507e01c0fd78d72199623d46d201d1"
  },
  {
    "url": "blog/tag/research-innovation/index.html",
    "revision": "870c7780d08d5432d3475be6ac77a25f"
  },
  {
    "url": "blog/tag/rgl/index.html",
    "revision": "e99458a0d25def72bf424e6de89f53c1"
  },
  {
    "url": "blog/tag/shiny/index.html",
    "revision": "cb63d14b59f22a4c76090da0f62ae0a1"
  },
  {
    "url": "blog/tag/social-factors/index.html",
    "revision": "a3a01b439def7b6e2702314539a69fe5"
  },
  {
    "url": "blog/tag/statistics/index.html",
    "revision": "ff36f9b8ac44ab11755ee5b8c173f6ed"
  },
  {
    "url": "blog/tag/template/index.html",
    "revision": "93b80a0231decc213eac7a1e0a144e62"
  },
  {
    "url": "blog/tag/tidyverse/index.html",
    "revision": "eef934007443faa1ffd8f4e502b858d8"
  },
  {
    "url": "blog/tag/urban-observatory/index.html",
    "revision": "773fbce81f80fba6a9cd26000c018989"
  },
  {
    "url": "blog/tag/web/index.html",
    "revision": "c451e6e8abcb88925b2fee69475c0d57"
  },
  {
    "url": "c0eea22f1b49b6f2a23e12a2dc801e20/img1.png",
    "revision": "c0eea22f1b49b6f2a23e12a2dc801e20"
  },
  {
    "url": "c1c39aa172bf6917b05d1eab697f27b6/img3.png",
    "revision": "c1c39aa172bf6917b05d1eab697f27b6"
  },
  {
    "url": "c6cc441d84feeafbdbb611d269db181b/img6.png",
    "revision": "c6cc441d84feeafbdbb611d269db181b"
  },
  {
    "url": "c944440f07a9819c3f73bbb95aa91b6a/sp_labels2.png",
    "revision": "c944440f07a9819c3f73bbb95aa91b6a"
  },
  {
    "url": "c9c3554184cabbe232393039b19492c0/Theme2.png",
    "revision": "c9c3554184cabbe232393039b19492c0"
  },
  {
    "url": "cd6f461faf6a5886f2fe62834cb84ec8dd40c0ec-9d1e7611d076a1439400.js"
  },
  {
    "url": "cd6f461faf6a5886f2fe62834cb84ec8dd40c0ec-9d1e7611d076a1439400.js.map",
    "revision": "ebd3c550c68c28a48f5a75bf47e60f10"
  },
  {
    "url": "ce0b325623f94aa7761c38e27508b1d6/rstudio3.png",
    "revision": "ce0b325623f94aa7761c38e27508b1d6"
  },
  {
    "url": "ce495cf4cddfab10605895c037545834/Colin_Angus.png",
    "revision": "ce495cf4cddfab10605895c037545834"
  },
  {
    "url": "cf4d725311c2fdf851f0b593d3a9f5b3/img2.jpg",
    "revision": "cf4d725311c2fdf851f0b593d3a9f5b3"
  },
  {
    "url": "cfb95ea008addc89a378c35355763e6c/Surface.png",
    "revision": "cfb95ea008addc89a378c35355763e6c"
  },
  {
    "url": "cfe6f1596bfe58e512d4951f0969c8c8/rgl.png",
    "revision": "cfe6f1596bfe58e512d4951f0969c8c8"
  },
  {
    "url": "chunk-map.json",
    "revision": "7d105b47ee241fd56f99990fc6544f53"
  },
  {
    "url": "community/index.html",
    "revision": "e8d0fd655d4988a842ceedd84876101a"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5ba91d208abaa2d8e59e.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-5ba91d208abaa2d8e59e.js.map",
    "revision": "d06ed5d6607588f3e4c818152bf55bd3"
  },
  {
    "url": "component---src-pages-404-jsx-7812d830350a93d63f8d.js"
  },
  {
    "url": "component---src-pages-404-jsx-7812d830350a93d63f8d.js.map",
    "revision": "c4b69ed45b1cd41efd113ff0b8630724"
  },
  {
    "url": "component---src-pages-about-jsx-d4d7259138dc60276ed0.js"
  },
  {
    "url": "component---src-pages-about-jsx-d4d7259138dc60276ed0.js.map",
    "revision": "7487742aac6201c3f4681665e2e54346"
  },
  {
    "url": "component---src-pages-accessibility-jsx-84bb8ed411f350d614b4.js"
  },
  {
    "url": "component---src-pages-accessibility-jsx-84bb8ed411f350d614b4.js.map",
    "revision": "822074b73356580092c61b88eda0270a"
  },
  {
    "url": "component---src-pages-community-jsx-a135df40df9762a2aae3.js"
  },
  {
    "url": "component---src-pages-community-jsx-a135df40df9762a2aae3.js.map",
    "revision": "e4e70546781c4e08f4aac55362bce7ee"
  },
  {
    "url": "component---src-pages-events-jsx-7ff4f909d52b2e1957cf.js"
  },
  {
    "url": "component---src-pages-events-jsx-7ff4f909d52b2e1957cf.js.map",
    "revision": "d21675bedbc4bf4ebc905d6173e9f299"
  },
  {
    "url": "component---src-pages-index-jsx-810cdbe724dce7588dd1.js"
  },
  {
    "url": "component---src-pages-index-jsx-810cdbe724dce7588dd1.js.map",
    "revision": "d075d830044d6920379e1f8554e74e75"
  },
  {
    "url": "component---src-pages-privacy-jsx-9bda0c1ffef58902c5fc.js"
  },
  {
    "url": "component---src-pages-privacy-jsx-9bda0c1ffef58902c5fc.js.map",
    "revision": "79f120a55fda3ba1465430aface11d4c"
  },
  {
    "url": "component---src-pages-search-jsx-da6996666f3a55504c8d.js"
  },
  {
    "url": "component---src-pages-search-jsx-da6996666f3a55504c8d.js.map",
    "revision": "fabb7fb4b70473544bbe4afa7cae3d8d"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-411f9e030adda8f00a66.js"
  },
  {
    "url": "component---src-templates-blog-blog-category-template-jsx-411f9e030adda8f00a66.js.map",
    "revision": "1f40b37afe86ca974305f365c5d3640c"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-bb27023d1a6c5ae70c9b.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-custom-jsx-bb27023d1a6c5ae70c9b.js.map",
    "revision": "ce418bfc7aa14401265438010bedbb8a"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-85f3dc0538e84156bc71.js"
  },
  {
    "url": "component---src-templates-blog-blog-post-template-jsx-85f3dc0538e84156bc71.js.map",
    "revision": "7dcaee76d9858901a0a4f88d8bdd20d4"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-58b84135b4d952e78770.js"
  },
  {
    "url": "component---src-templates-blog-blog-tag-template-jsx-58b84135b4d952e78770.js.map",
    "revision": "f01eab8242a2bcab332f3872748609d3"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-3fc058818aca8bda24cf.js"
  },
  {
    "url": "component---src-templates-blog-blog-template-jsx-3fc058818aca8bda24cf.js.map",
    "revision": "933f3d2144acc7f5552312d5bae88e0e"
  },
  {
    "url": "d208a25a86562dd71c41ba95f7546627/ggplotBlank.png",
    "revision": "d208a25a86562dd71c41ba95f7546627"
  },
  {
    "url": "d227ea25fb93882cf5cad614b9deeb7f/img4.png",
    "revision": "d227ea25fb93882cf5cad614b9deeb7f"
  },
  {
    "url": "d3/d3js_for_dataviz.js"
  },
  {
    "url": "d3/dataviz.js"
  },
  {
    "url": "d3/dist/d3js_for_dataviz.dev.js"
  },
  {
    "url": "d3/dist/dataviz.dev.js"
  },
  {
    "url": "d482a2bd82604992ea37ab425fcd95c9/img13.png",
    "revision": "d482a2bd82604992ea37ab425fcd95c9"
  },
  {
    "url": "d706d7115f6f55e0119134f15bc0178a/Fig6.png",
    "revision": "d706d7115f6f55e0119134f15bc0178a"
  },
  {
    "url": "d7eeaac4-4220932460fbdf94518b.js"
  },
  {
    "url": "d7eeaac4-4220932460fbdf94518b.js.map",
    "revision": "86af00b0b11bc7c8c332e62fdf333bcd"
  },
  {
    "url": "d8e90b6d2733655bded268952633def1/img3.png",
    "revision": "d8e90b6d2733655bded268952633def1"
  },
  {
    "url": "da82f0ec8e46aa78ee29c58673f94d00/img7.png",
    "revision": "da82f0ec8e46aa78ee29c58673f94d00"
  },
  {
    "url": "dba3324f4142f375d19268a54c60e915/output_32_1.png",
    "revision": "dba3324f4142f375d19268a54c60e915"
  },
  {
    "url": "de71a805-a41316f9e8bf17ec341b.js"
  },
  {
    "url": "de71a805-a41316f9e8bf17ec341b.js.map",
    "revision": "c8ab47e977fb34e21514fc408591ff58"
  },
  {
    "url": "e04c37380dca28669fa92eac59ceffc1/Fig3.png",
    "revision": "e04c37380dca28669fa92eac59ceffc1"
  },
  {
    "url": "e30e471cc42b0550ad39ff8c40d6c078/output_16_1.png",
    "revision": "e30e471cc42b0550ad39ff8c40d6c078"
  },
  {
    "url": "e3894ca278407b744059dd5fa168dc0c/Ermentrout.png",
    "revision": "e3894ca278407b744059dd5fa168dc0c"
  },
  {
    "url": "e44d2e8c61221320a6dce9ec5016fe98/saveImg.png",
    "revision": "e44d2e8c61221320a6dce9ec5016fe98"
  },
  {
    "url": "e4be2d5d36c833a13ad91fe8cc0b72f2/hexbinPlot.png",
    "revision": "e4be2d5d36c833a13ad91fe8cc0b72f2"
  },
  {
    "url": "e5000396a4f7ac960b66debd0ef47352/Fig4.gif",
    "revision": "e5000396a4f7ac960b66debd0ef47352"
  },
  {
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-49ea79c02d830c3c3ecd.js"
  },
  {
    "url": "e678b8b4676ac9fa48670c696e16c887ac7f55c7-49ea79c02d830c3c3ecd.js.map",
    "revision": "56226b424adb2b502571829d8d464d37"
  },
  {
    "url": "e79de403c487f46cc2c02dc4cad8fe76/BlogBreakdown.png",
    "revision": "e79de403c487f46cc2c02dc4cad8fe76"
  },
  {
    "url": "e871a4b80ef736b0894bd99e6063d8a0/sp_final.png",
    "revision": "e871a4b80ef736b0894bd99e6063d8a0"
  },
  {
    "url": "events/index.html",
    "revision": "a058efac38503e194c3b575f31f1b2a8"
  },
  {
    "url": "f132b4caf23a2eb84ad4c68e52fe1df6/Fig7.png",
    "revision": "f132b4caf23a2eb84ad4c68e52fe1df6"
  },
  {
    "url": "f19704a092dc0f7a75a1a7a37b13cec7/Fig2.png",
    "revision": "f19704a092dc0f7a75a1a7a37b13cec7"
  },
  {
    "url": "f2125eef0963be539792380e28a5d9ea/sp_label.png",
    "revision": "f2125eef0963be539792380e28a5d9ea"
  },
  {
    "url": "f3eeeefc72334f5f5c13a45b961ed8ce/data2.png",
    "revision": "f3eeeefc72334f5f5c13a45b961ed8ce"
  },
  {
    "url": "f4ea99fb7f507e5d29383ece5079d3f1/Fig8.jpg",
    "revision": "f4ea99fb7f507e5d29383ece5079d3f1"
  },
  {
    "url": "f809e3e6ff34dfcb2e726a03b56c47a0/Fig2.png",
    "revision": "f809e3e6ff34dfcb2e726a03b56c47a0"
  },
  {
    "url": "f89ccb1bcb05aa1b57c2bb6f965ea322/Colour Scales.png",
    "revision": "f89ccb1bcb05aa1b57c2bb6f965ea322"
  },
  {
    "url": "f96c22e5da24ad6284916dc2420fc04d/img5.png",
    "revision": "f96c22e5da24ad6284916dc2420fc04d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "b3ce05f343aecae60fbeb68d36f04bd0"
  },
  {
    "url": "fb16343b545125a2840699b1215cafe3/Fig5.jpg",
    "revision": "fb16343b545125a2840699b1215cafe3"
  },
  {
    "url": "fc793935fef334c225b42aab0fd70a7e/solution.jpg",
    "revision": "fc793935fef334c225b42aab0fd70a7e"
  },
  {
    "url": "fd2d512dc3280986741babd5e53ba9c7/img2.png",
    "revision": "fd2d512dc3280986741babd5e53ba9c7"
  },
  {
    "url": "fdb1e2f7472aa185ca0212ced955456e/Sheffield_Hackathon_Map_Output.png",
    "revision": "fdb1e2f7472aa185ca0212ced955456e"
  },
  {
    "url": "flexsearch_index.json",
    "revision": "048966c3d40236cb55335f0e80f09b1e"
  },
  {
    "url": "framework-f386f195940cf9f6d908.js"
  },
  {
    "url": "framework-f386f195940cf9f6d908.js.map",
    "revision": "79e9aea2687947950b32e38975666950"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "e7e5cbfb885b4c94534046a559597f9f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "c47ec57e751a987f6edc7c59f1e53dc7"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "2239bdb5e388a6d7de72a16b0b34d565"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "7958ec927e7ce3ca3899e9ed0ad8e48c"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "8acf4ff1f9e2f076dda9be0a291a8698"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "e3e7181ae750d4cff3be976326135222"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "c59e1c263dfac592107430eab5959325"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "2d37636aa138bf198d388f36bf9e7aaf"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "6dec7b0573e4a244e72c61d305e19986"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "8d0b5c4f27de19af677b8e979a75d509"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "979231c51da283dcd4fafb0333cd6721"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "548e9c6655e688768583a7ec81afb994"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "e1d1232f70eb57bf56994354e9d741ad"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "534f7202ade34edb02179bd228f1a18b"
  },
  {
    "url": "page-data/accessibility/page-data.json",
    "revision": "c9072986500af0b781362f43bf494235"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "220a8fc4dc7df1eac646d6455f25de19"
  },
  {
    "url": "page-data/blog/01/06/2020/visualising-high-risk-areas-for-covid-19-mortality/page-data.json",
    "revision": "daaf4af3e579342bf337b81d24a88015"
  },
  {
    "url": "page-data/blog/02/05/2020/dataviz-stats-1/page-data.json",
    "revision": "1ba9adf4a96dfb15db48479868eb4738"
  },
  {
    "url": "page-data/blog/03/07/2020/Deploy-Your-Dash-App/page-data.json",
    "revision": "fffc940f889c3643261c1c2d43ef45dd"
  },
  {
    "url": "page-data/blog/03/07/2020/LearningPath-Introduction/page-data.json",
    "revision": "ff158710518a265fc666b0b88b3b5ace"
  },
  {
    "url": "page-data/blog/04/06/2020/dash-tutorial/page-data.json",
    "revision": "d7e190a4ccd66036214082d34f0a5499"
  },
  {
    "url": "page-data/blog/04/07/2020/LearningPath-Lab/page-data.json",
    "revision": "11e780bf794d491663af4bc68c18fce4"
  },
  {
    "url": "page-data/blog/05/02/2021/Shiny-Template/page-data.json",
    "revision": "3d4ddb11f7f144fb113eb7c86a0acdf7"
  },
  {
    "url": "page-data/blog/05/07/2020/LearningPath-Workflow/page-data.json",
    "revision": "a318293f4554786e30cac542b2497e1f"
  },
  {
    "url": "page-data/blog/05/09/2020/challenges-in-visualising-data/page-data.json",
    "revision": "f110196e89b319ab89ba44b4943c8298"
  },
  {
    "url": "page-data/blog/06/04/2020/chart-choice/page-data.json",
    "revision": "ca93b18da214790c0f7965d03a88719b"
  },
  {
    "url": "page-data/blog/06/05/2020/Colour-Schemes/page-data.json",
    "revision": "b04f95380d1599439d57bf5a8752d721"
  },
  {
    "url": "page-data/blog/07/05/2020/dataviz-stats-2/page-data.json",
    "revision": "76f007279b6fd68829ba0864fe343fbb"
  },
  {
    "url": "page-data/blog/08/10/2020/moving-from-excel-to-r/page-data.json",
    "revision": "eb5b0806c9c49fe73cbd723931264153"
  },
  {
    "url": "page-data/blog/09/09/2020/data-visualizations-social-role/page-data.json",
    "revision": "4e90d548d8c9496abd6e635b9c6ca590"
  },
  {
    "url": "page-data/blog/11/06/2020/simple-data-visualisations-have-become-key-to-communicating-about-the-COVID-19-pandemic/page-data.json",
    "revision": "545b1a720716a38976e7584a08914d65"
  },
  {
    "url": "page-data/blog/12/06/2020/dash-tutorial-2/page-data.json",
    "revision": "a5ade28287f63e75aab8553e63427cbd"
  },
  {
    "url": "page-data/blog/15/01/2021/Data-Processing-In-R/page-data.json",
    "revision": "fc44179522c0aa51298a70f50827844b"
  },
  {
    "url": "page-data/blog/16/06/2020/Jupyter-Widgets/page-data.json",
    "revision": "c95ed5dcb43afb7703510cad7374c0a4"
  },
  {
    "url": "page-data/blog/16/07/2020/python-visualisation-templates/page-data.json",
    "revision": "2a3885f10ab54bf88f87c4c4757e137a"
  },
  {
    "url": "page-data/blog/18/08/2020/GM/page-data.json",
    "revision": "62dcad3a03441e2fdb76c72ac175ea0d"
  },
  {
    "url": "page-data/blog/20/01/2021/Static-Visualisations-In-R/page-data.json",
    "revision": "40f78b0ded4f682bf79c5272444445ba"
  },
  {
    "url": "page-data/blog/20/05/2020/Non-Numeric/page-data.json",
    "revision": "fdaea963132eb91f1c5c9157f028e695"
  },
  {
    "url": "page-data/blog/22/03/2020/contribute-blog-post/page-data.json",
    "revision": "d7c9f6e9aa9ca690db939a645105bdd0"
  },
  {
    "url": "page-data/blog/22/03/2020/datavizhub-guide/page-data.json",
    "revision": "23903e48decca30bd4de5622d24fd1c9"
  },
  {
    "url": "page-data/blog/24/06/2020/host-jupyter-notebook/page-data.json",
    "revision": "a84924f443eb2c6653fcd40668845a62"
  },
  {
    "url": "page-data/blog/25/01/2021/Morphologica/page-data.json",
    "revision": "fd4b98854491a8107a63dbf097c9cdde"
  },
  {
    "url": "page-data/blog/26/08/2020/D3js-for-data-visualisation/page-data.json",
    "revision": "5e1bc8c8a10b8cb7b2f052e5c4f87564"
  },
  {
    "url": "page-data/blog/27/01/2021/Interactive-Visualisations-In-R/page-data.json",
    "revision": "6d0aa0ab8fdad9c6569ec5b1e84a05a6"
  },
  {
    "url": "page-data/blog/28/02/2020/Urban-Observatories-hackathon/page-data.json",
    "revision": "927e26ae666b812da808d46195b62adc"
  },
  {
    "url": "page-data/blog/30/09/2020/making-the-best-data-visualisations-in-excel/page-data.json",
    "revision": "fd231b2363ed8d099f909750d0577ae2"
  },
  {
    "url": "page-data/blog/category/articles/page-data.json",
    "revision": "090a7c8aa54a9a15bf3a0a143b328b96"
  },
  {
    "url": "page-data/blog/category/articles/page/2/page-data.json",
    "revision": "ee9b7ce8d1d2e3e041d0c8f3bdfde0c5"
  },
  {
    "url": "page-data/blog/category/events/page-data.json",
    "revision": "e648b14de0e20949891d9a6ca209d8e9"
  },
  {
    "url": "page-data/blog/category/tutorial/page-data.json",
    "revision": "42976e4238beb5074e84aefc8ff74136"
  },
  {
    "url": "page-data/blog/page-data.json",
    "revision": "66075ff2f58bd111de2271b1726ad372"
  },
  {
    "url": "page-data/blog/page/2/page-data.json",
    "revision": "edc311c9dc2401fbca0ba511e4ed7289"
  },
  {
    "url": "page-data/blog/page/3/page-data.json",
    "revision": "cf23cf8bcd153f150e3aa8f489ddf75e"
  },
  {
    "url": "page-data/blog/tag/best-practice/page-data.json",
    "revision": "99873989f368978e335f65d79b1b4374"
  },
  {
    "url": "page-data/blog/tag/blog/page-data.json",
    "revision": "a0a9f5941aadbfd3a4e79f9f6185d45a"
  },
  {
    "url": "page-data/blog/tag/c/page-data.json",
    "revision": "72cc2ae45aaee05b4133a87e67844b16"
  },
  {
    "url": "page-data/blog/tag/covid-19-mortality/page-data.json",
    "revision": "84b273f0841a77a92ec4f9884b75de83"
  },
  {
    "url": "page-data/blog/tag/covid-19-virus-sars-co-v-2/page-data.json",
    "revision": "fa1b3baa121aa1cdf230f6943b8f320d"
  },
  {
    "url": "page-data/blog/tag/d-3-js/page-data.json",
    "revision": "d14d0394099b3694eb0a03ac1cd48375"
  },
  {
    "url": "page-data/blog/tag/dash/page-data.json",
    "revision": "b610f6eae945223065ca6848b0cbaf19"
  },
  {
    "url": "page-data/blog/tag/data-analytics/page-data.json",
    "revision": "ad0b38d611700409c7c4a7fcbac8865c"
  },
  {
    "url": "page-data/blog/tag/data-engineering/page-data.json",
    "revision": "2c6ee3428e5e6e8e6ab8bf069f34640f"
  },
  {
    "url": "page-data/blog/tag/data-politics/page-data.json",
    "revision": "57af09874fad06cc05b87214eec791d7"
  },
  {
    "url": "page-data/blog/tag/dataviz/page-data.json",
    "revision": "80d6d4bdbbf0fbd59c380415d42c8df5"
  },
  {
    "url": "page-data/blog/tag/deploy/page-data.json",
    "revision": "b06d346e7798932668d1f248db7bf016"
  },
  {
    "url": "page-data/blog/tag/effectiveness/page-data.json",
    "revision": "6a375fd0dd4a72ed48cc83e24d92e82a"
  },
  {
    "url": "page-data/blog/tag/effects/page-data.json",
    "revision": "2d9378d17cbaff6c1dedd9c114b5f1f8"
  },
  {
    "url": "page-data/blog/tag/emotions/page-data.json",
    "revision": "94dcd158deb84181910c5ffbf13135ee"
  },
  {
    "url": "page-data/blog/tag/engaging-with-dataviz/page-data.json",
    "revision": "90e0c394b38720d77c99ab60196d1499"
  },
  {
    "url": "page-data/blog/tag/epidemiology/page-data.json",
    "revision": "8864747bb80392975b9f0afa7fd504bc"
  },
  {
    "url": "page-data/blog/tag/excel/page-data.json",
    "revision": "c539fac1afd3306806841c3d8f9eb7db"
  },
  {
    "url": "page-data/blog/tag/ggplot-2/page-data.json",
    "revision": "defd645906e04bf3de1b2f7ee710b6d6"
  },
  {
    "url": "page-data/blog/tag/ggpubr/page-data.json",
    "revision": "df02207b8bd0be13862476b47fb0173e"
  },
  {
    "url": "page-data/blog/tag/heroku/page-data.json",
    "revision": "2c4b497c67f02701dd772c792f5be721"
  },
  {
    "url": "page-data/blog/tag/host/page-data.json",
    "revision": "f725f8975e27a5299812ba6b2839c7f6"
  },
  {
    "url": "page-data/blog/tag/html/page-data.json",
    "revision": "4f1215ad8420d9921d55b5ba3559e98b"
  },
  {
    "url": "page-data/blog/tag/interactive/page-data.json",
    "revision": "fd13f49f0611badaeb51caa7808b7544"
  },
  {
    "url": "page-data/blog/tag/javascript/page-data.json",
    "revision": "d8351b36064c498df6322bada58215af"
  },
  {
    "url": "page-data/blog/tag/jupyter-notebook/page-data.json",
    "revision": "8b6b47d4e4a797ca61b832a9b4576e10"
  },
  {
    "url": "page-data/blog/tag/jupyter-widgets/page-data.json",
    "revision": "9ee9ab0db74226a8a0b876034e4bbca5"
  },
  {
    "url": "page-data/blog/tag/lattice/page-data.json",
    "revision": "8a077b8a3f2cf9e36487bf12071d5702"
  },
  {
    "url": "page-data/blog/tag/markdown/page-data.json",
    "revision": "a0cf956628d07ed5daeea234d1c40035"
  },
  {
    "url": "page-data/blog/tag/pandas/page-data.json",
    "revision": "2b45f86fa2aa4993834d767e676be77d"
  },
  {
    "url": "page-data/blog/tag/pandemic/page-data.json",
    "revision": "dc3ed390c3fbfd57952aaab29286f56c"
  },
  {
    "url": "page-data/blog/tag/plotly/page-data.json",
    "revision": "4b9094f75b6a842970ae76c14588ee5b"
  },
  {
    "url": "page-data/blog/tag/python/page-data.json",
    "revision": "62bac7fc69de54591843f089e56cb705"
  },
  {
    "url": "page-data/blog/tag/r/page-data.json",
    "revision": "5a97f7ea45e6deb37b8b629919a43379"
  },
  {
    "url": "page-data/blog/tag/research-innovation/page-data.json",
    "revision": "22c8d7fd24a102e921b07c6c1a67bb62"
  },
  {
    "url": "page-data/blog/tag/rgl/page-data.json",
    "revision": "0e4eb996c0a305905424275e542c4fe1"
  },
  {
    "url": "page-data/blog/tag/shiny/page-data.json",
    "revision": "58ba0cd86e3dea30dff78db4f2d186a2"
  },
  {
    "url": "page-data/blog/tag/social-factors/page-data.json",
    "revision": "acccba8568932e694afff717adf16945"
  },
  {
    "url": "page-data/blog/tag/statistics/page-data.json",
    "revision": "df4182b4fdc8703193fbebac072cca2c"
  },
  {
    "url": "page-data/blog/tag/template/page-data.json",
    "revision": "0c168397287128346be051b2dc62c83c"
  },
  {
    "url": "page-data/blog/tag/tidyverse/page-data.json",
    "revision": "44e71c965b01436c4673d25d82c1dc16"
  },
  {
    "url": "page-data/blog/tag/urban-observatory/page-data.json",
    "revision": "70e87483ff8dca7783b0a03e7eb9af2c"
  },
  {
    "url": "page-data/blog/tag/web/page-data.json",
    "revision": "813f245e6aff7f0867353e622a9038f1"
  },
  {
    "url": "page-data/community/page-data.json",
    "revision": "c224ca504da549d4dcebb75e51bb766c"
  },
  {
    "url": "page-data/events/page-data.json",
    "revision": "3634a2e92b17d400849a58dd29838973"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "254a64f28281007c1b1ac1d63fee701f"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "f6081b83111aea4128c98944b7fafccc"
  },
  {
    "url": "page-data/privacy/page-data.json",
    "revision": "56801ac39d165648aff6b297cd482a6d"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "ada6d6a8a1de7d6fe4d4940797f5d714"
  },
  {
    "url": "page-data/sq/d/1454382005.json",
    "revision": "61508b4377957ad362f9a4c07cc8a31d"
  },
  {
    "url": "page-data/sq/d/1792964189.json",
    "revision": "956b5a84a733011cef4ee50ccea02802"
  },
  {
    "url": "page-data/sq/d/2676937355.json",
    "revision": "c9e03f93202f057ac20046d008924377"
  },
  {
    "url": "page-data/sq/d/2772118594.json",
    "revision": "28421a86459411a1addef03952ef15b7"
  },
  {
    "url": "page-data/sq/d/2868699018.json",
    "revision": "272f574e9676a2faa17d1cc2f75122c8"
  },
  {
    "url": "page-data/sq/d/3370916995.json",
    "revision": "c32712adc3f140329dd276847b5b2e4f"
  },
  {
    "url": "page-data/sq/d/4157404630.json",
    "revision": "8b8d71427c3877e207827583513a154d"
  },
  {
    "url": "page-data/sq/d/501939828.json",
    "revision": "f31acaf328c912c170bb50db7e550a43"
  },
  {
    "url": "page-data/sq/d/63159454.json",
    "revision": "30b2a1e655f94558cde55b82507f4883"
  },
  {
    "url": "polyfill-1fed80b5ec878f98a45b.js"
  },
  {
    "url": "polyfill-1fed80b5ec878f98a45b.js.map",
    "revision": "04bc584c83a9669d672e0dcbe594a50e"
  },
  {
    "url": "privacy/index.html",
    "revision": "9598a8da933a555729b64ec5ab76c764"
  },
  {
    "url": "search/index.html",
    "revision": "57e3bdb046ba04b80c2e5c6aaeb44378"
  },
  {
    "url": "sitemap.xsl",
    "revision": "84eed71bbf820506ceb395ae16c91e89"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/21302/dataviz.jpg"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/801b3/dataviz.jpg"
  },
  {
    "url": "static/02beed7ac46f390d93fba01e5ea4a1c1/cd873/dataviz.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/2244e/Y.L_Weng.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/2e97c/Y.L_Weng.jpg"
  },
  {
    "url": "static/0b4fd531c4d7e2b13cad834b37cad1fc/f836f/Y.L_Weng.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/1df11/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/34f1d/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/39fae/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/8fb7e/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/b1e91/community.jpg"
  },
  {
    "url": "static/1576c9b5502a3814d7f87f98eb8a0089/ce222/community.jpg"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/497c6/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/69585/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/dff58/LetterIcon.png"
  },
  {
    "url": "static/1900c2032227e4775232aec94b867b8c/ee604/LetterIcon.png"
  },
  {
    "url": "static/1b950aec9371d81fecb003f21d10c274/c01e2/Seb_J.jpg"
  },
  {
    "url": "static/1b950aec9371d81fecb003f21d10c274/f836f/Seb_J.jpg"
  },
  {
    "url": "static/2ec5c103f287dc87d926d899bc31b225/833d8/rosie_h.jpg"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/497c6/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/5707d/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/69585/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/ce507/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/ee604/ShinyThumb.png"
  },
  {
    "url": "static/3676fcf950513776ee47b6d96c06bfb1/f3583/ShinyThumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/196bc/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/497c6/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/69585/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/ee604/thumb.png"
  },
  {
    "url": "static/37d5f141f79b2a8fb0910e00f8fa340f/f3583/thumb.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/108cb/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/497c6/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/69585/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/ee604/Fig1.png"
  },
  {
    "url": "static/3cda13cd4a0d1370ed8e128035832649/f3583/Fig1.png"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/2244e/login_sm4.jpg"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/82eb6/login_sm4.jpg"
  },
  {
    "url": "static/455e7875a263fa94f0c44ecb181f9ec8/f836f/login_sm4.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/39fae/chair.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/b1e91/chair.jpg"
  },
  {
    "url": "static/48da9e4fe0f5ea7a532420147131e5e3/ce222/chair.jpg"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/0f447/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/497c6/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/69585/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/ee604/thumb.png"
  },
  {
    "url": "static/4d780efc31fca445d33012fa2d56c995/f3583/thumb.png"
  },
  {
    "url": "static/520f2ff84f05bad12a0e30618fa5e593/684c4/joe_h.jpg"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/017d7/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/497c6/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/69585/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/ee604/GM_Thumb.png"
  },
  {
    "url": "static/628a6cd7be164bbd94b4b7f971d761dc/f3583/GM_Thumb.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/09a85/Fig1.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/497c6/Fig1.png"
  },
  {
    "url": "static/6f3ed93fe3e6ea21b26c15df4b34c525/69585/Fig1.png"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/78a35/moon.jpg"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/e66c2/moon.jpg"
  },
  {
    "url": "static/749188996e1d4d10ce4d9c75c7d709b3/f01d2/moon.jpg"
  },
  {
    "url": "static/7711a87621c0c4a65462df1b7fbfb241/684c4/angus_t.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/0e329/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/14b42/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/2244e/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/47498/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/d8255/bg.jpg"
  },
  {
    "url": "static/784fd2b169434bda6ce4440a901eb7ca/f836f/bg.jpg"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/3ee52/Fig1.png"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/497c6/Fig1.png"
  },
  {
    "url": "static/7e6512bc55228b80a2bfcbdff165add2/69585/Fig1.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/497c6/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/69585/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/ac98b/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/ee604/thumb.png"
  },
  {
    "url": "static/8299e3c1cf212758e19d56784b0e4e48/f3583/thumb.png"
  },
  {
    "url": "static/871859109b0659b0d6a48ae540cb439e/46991/dataviz.png"
  },
  {
    "url": "static/871859109b0659b0d6a48ae540cb439e/69585/dataviz.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/497c6/Charts_Thumb.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/69585/Charts_Thumb.png"
  },
  {
    "url": "static/873350e406407b3316da2e9a12713b2e/7dac8/Charts_Thumb.png"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/2244e/img_1.jpg"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/f422e/img_1.jpg"
  },
  {
    "url": "static/93bb7bf89089bb255fa67456854e0db3/f836f/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/2244e/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/f422e/img_1.jpg"
  },
  {
    "url": "static/98f53e94125f8b6b49696d5765f9c537/f836f/img_1.jpg"
  },
  {
    "url": "static/about-d1b3607045b93bc9f47f2edab8393a23.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/0e329/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/14b42/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/2244e/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/47498/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/d8255/temp.jpg"
  },
  {
    "url": "static/b4cbf28e22e521e30c82125257f309ca/f836f/temp.jpg"
  },
  {
    "url": "static/b6f432ec1b47d139d904d5025714b073/148b8/helen_k.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/0e329/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/14b42/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/2244e/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/47498/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/e731c/Dash1.jpg"
  },
  {
    "url": "static/b705fcaaa8477708ca1c07cf535113f4/f836f/Dash1.jpg"
  },
  {
    "url": "static/bg-d2e315389be310ad1df988334939fa79.jpg"
  },
  {
    "url": "static/bg1-5fff908ab0abc7a6edf3a19225c0b9a5.jpg"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/497c6/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/5707d/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/69585/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/d98bf/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/ee604/thumb.png"
  },
  {
    "url": "static/c6a9247fe67e7f8875418f51942a0305/f3583/thumb.png"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/0f3a1/8389.jpg"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/2244e/8389.jpg"
  },
  {
    "url": "static/c77d3d7688082caba4911daa24a0a8b9/f836f/8389.jpg"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/104b3/no_image_4.png"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/88c65/no_image_4.png"
  },
  {
    "url": "static/c823d2bf145dd881fe77c9265116b3e8/ca599/no_image_4.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/497c6/PPCirc.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/69585/PPCirc.png"
  },
  {
    "url": "static/c8d0f44f49a0c2ce38d557f5b9070c49/c6e25/PPCirc.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/1b680/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/497c6/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/69585/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/ee604/R.png"
  },
  {
    "url": "static/cc3faec1acf899e4921aed9fcfa798e5/f3583/R.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/497c6/Surface.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/5b6ba/Surface.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/69585/Surface.png"
  },
  {
    "url": "static/cfb95ea008addc89a378c35355763e6c/ee604/Surface.png"
  },
  {
    "url": "static/com_1-a0e4c0689c63024715127c5e741bd8a6.jpg"
  },
  {
    "url": "static/com_2-e649ff42b2d4ee96bdbc1606d1308a65.jpg"
  },
  {
    "url": "static/COVIDDeathPropMSOA-6008149dc156a93bcd039c1eb92ce147.png"
  },
  {
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/2244e/jez_c.jpg"
  },
  {
    "url": "static/d334c839a9c87e13e2901d5d6e7047df/f836f/jez_c.jpg"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/0f447/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/497c6/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/69585/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/ee604/thumb.png"
  },
  {
    "url": "static/e0809fcf5fc34293b4add8d838455636/f3583/thumb.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/4589b/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/497c6/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/69585/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/ee604/thumb1.png"
  },
  {
    "url": "static/ed944f0c528d5f27cc4098896dc80c99/f3583/thumb1.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/497c6/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/65595/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/69585/thumb.png"
  },
  {
    "url": "static/f4595957a37944891068ea9f168c144a/ee604/thumb.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/497c6/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/5707d/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/69585/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/ee604/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/fdb1e2f7472aa185ca0212ced955456e/f3583/Sheffield_Hackathon_Map_Output.png"
  },
  {
    "url": "static/google-6f52b93ba7863140c2badef18ed17a97.png"
  },
  {
    "url": "static/its-bf42e10ede6fc9096548ea038be6d3ec.png"
  },
  {
    "url": "static/KaTeX_AMS-Regular-2dbe16b4f4662798159f8d62c8d2509d.ttf"
  },
  {
    "url": "static/KaTeX_AMS-Regular-38a68f7d18d292349a6e802a66136eae.woff2"
  },
  {
    "url": "static/KaTeX_AMS-Regular-7d307e8337b9559e4040c5fb76819789.woff"
  },
  {
    "url": "static/KaTeX_Caligraphic-Bold-33d26881e4dd89321525c43b993f136c.ttf"
  },
  {
    "url": "static/KaTeX_Caligraphic-Regular-5e7940b4ed250e98a512f520e39c867d.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-4de87d40f0389255d975c69d45a0a7e7.woff"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-7a3757c0bfc580d91012d092ec8f06cb.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Bold-ed330126290a846bf0bb78f61aa6a080.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-450cc4d9319c4a438dd00514efac941b.woff2"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-82d05fe2abb0da9d1077110efada0f6e.ttf"
  },
  {
    "url": "static/KaTeX_Fraktur-Regular-dc4e330b6334767a16619c60d9ebce8c.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-2e1915b1a2f33c8ca9d1534193e934d7.ttf"
  },
  {
    "url": "static/KaTeX_Main-Bold-62c69756b3f1ca7b52fea2bea1030cd2.woff"
  },
  {
    "url": "static/KaTeX_Main-Bold-78b0124fc13059862cfbe4c95ff68583.woff2"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-0d817b487b7fc993bda7dddba745d497.ttf"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-a2e3dcd2316f5002ee2b5f35614849a8.woff"
  },
  {
    "url": "static/KaTeX_Main-BoldItalic-c7213ceb79250c2ca46cc34ff3b1aa49.woff2"
  },
  {
    "url": "static/KaTeX_Main-Italic-081073fd6a7c66073ad231db887de944.woff"
  },
  {
    "url": "static/KaTeX_Main-Italic-767e06e1df6abd16e092684bffa71c38.ttf"
  },
  {
    "url": "static/KaTeX_Main-Italic-eea32672f64250e9d1dfb68177c20a26.woff2"
  },
  {
    "url": "static/KaTeX_Main-Regular-689bbe6b67f22ffb51b15cc6cfa8facf.ttf"
  },
  {
    "url": "static/KaTeX_Main-Regular-756fad0d6f3dff1062cfa951751d744c.woff"
  },
  {
    "url": "static/KaTeX_Main-Regular-f30e3b213e9a74cf7563b0c3ee878436.woff2"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-753ca3dfa44302604bec8e08412ad1c1.woff2"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-b3e80ff3816595ffb07082257d30b24f.woff"
  },
  {
    "url": "static/KaTeX_Math-BoldItalic-d9377b53f267ef7669fbcce45a74d4c7.ttf"
  },
  {
    "url": "static/KaTeX_Math-Italic-0343f93ed09558b81aaca43fc4386462.ttf"
  },
  {
    "url": "static/KaTeX_Math-Italic-2a39f3827133ad0aeb2087d10411cbf2.woff2"
  },
  {
    "url": "static/KaTeX_Math-Italic-67710bb2357b8ee5c04d169dc440c69d.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-59b3773389adfb2b21238892c08322ca.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-dfcc59ad994a0513b07ef3309b8b5159.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Bold-f28c4fa28f596796702fea3716d82052.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-3ab5188c9aadedf425ea63c6b6568df7.ttf"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-99ad93a4600c7b00b961d70943259032.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Italic-9d0fdf5d7d27b0e3bdc740d90b40ec57.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-6c3bd5b57f7eba215a2d37e2e28077f1.woff"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-badf3598c22478fd9155a49391ecd396.woff2"
  },
  {
    "url": "static/KaTeX_SansSerif-Regular-d511ebcef253ab53775576f28315f350.ttf"
  },
  {
    "url": "static/KaTeX_Script-Regular-082640ca4242bb2aade86855e4d7d5f6.ttf"
  },
  {
    "url": "static/KaTeX_Script-Regular-4edf4e0fd49c8a5680dd541c05f16a4c.woff"
  },
  {
    "url": "static/KaTeX_Script-Regular-af7bc98b2200573686405dc784f53cf2.woff2"
  },
  {
    "url": "static/KaTeX_Size1-Regular-2c2dc3b057bb48b80bc785ac3d87ecf8.ttf"
  },
  {
    "url": "static/KaTeX_Size2-Regular-114ad19833311359052ad1a174159262.ttf"
  },
  {
    "url": "static/KaTeX_Size4-Regular-70174da79d1707501c10e07872e84667.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-35fe2cce0791c276b8e919decd873f5b.ttf"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-53dcf861876aae6f3a6a6004dc3bc758.woff"
  },
  {
    "url": "static/KaTeX_Typewriter-Regular-641339e2cd86c7816bfb8028ee7f86e0.woff2"
  },
  {
    "url": "static/no_image_1-cbab1c85fd0b5df4703007ed018da08a.png"
  },
  {
    "url": "static/no_image_2-8588841d1e101e5cd1794737b8392414.png"
  },
  {
    "url": "static/no_image_3-5fff908ab0abc7a6edf3a19225c0b9a5.png"
  },
  {
    "url": "static/no_image_4-c823d2bf145dd881fe77c9265116b3e8.png"
  },
  {
    "url": "static/no_image_5-0b0b76e89033963a72b34200d192a851.png"
  },
  {
    "url": "static/orda_logo-d4442f31f9acafdb4dc5c2b1bc509071.png"
  },
  {
    "url": "static/rse-6449112d7c9c5b6e83469baf7a3071fc.png"
  },
  {
    "url": "static/TUOSlogo-b500c122c2226f80b16ecd110ff62e48.png"
  },
  {
    "url": "static/user1-dc7c51f98d395f38d7b70e2962cb5329.png"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js"
  },
  {
    "url": "styles-d34d6d50c68384cf0a65.js.map",
    "revision": "8236b01a896fb556d1c5d0d4488443d5"
  },
  {
    "url": "styles.60c71f0b001980553b62.css"
  },
  {
    "url": "webpack-runtime-0d40398f36f8d5059d3e.js"
  },
  {
    "url": "webpack-runtime-0d40398f36f8d5059d3e.js.map",
    "revision": "3f17b5df50f5c8e0d5939f60519176ae"
  },
  {
    "url": "webpack.stats.json",
    "revision": "4e3eae18fd2fb900df640fb415430b6f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-c9faf21b85d4767fa6ab.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
