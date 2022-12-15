$(function ()
{
  "use strict";

  //------- Parallax -------//
  skrollr.init({
    forceHeight: true
  });

  //------- Active Nice Select --------//
  $('select').niceSelect();

  //------- hero carousel -------//
  $(".hero-carousel").owlCarousel({
    items: 3,
    margin: 10,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: false,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      810: {
        items: 3
      }
    }
  });

  //------- Best Seller Carousel -------//
  if ($('.owl-carousel').length > 0)
  {
    $('#bestSellerCarousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      navText: ["<i class='ti-arrow-left'></i>", "<i class='ti-arrow-right'></i>"],
      dots: false,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        900: {
          items: 4
        },
        1130: {
          items: 5
        }
      }
    })
  }

  //------- single product area carousel -------//
  $(".s_Product_carousel").owlCarousel({
    items: 1,
    autoplay: false,
    autoplayTimeout: 5000,
    loop: false,
    nav: false,
    dots: false
  });

  //------- mailchimp --------//  
  function mailChimp()
  {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();

  //------- fixed navbar --------//  
  $(window).scroll(function ()
  {
    var sticky = $('.header_area'),
      scroll = $(window).scrollTop()

    if (scroll >= 100) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });

  //------- Price Range slider -------//
  if (document.getElementById("price-range"))
  {

    var nonLinearSlider = document.getElementById('price-range');

    noUiSlider.create(nonLinearSlider, {
      connect: true,
      behaviour: 'tap',
      start: [500, 4000],
      range: {
        // Starting at 500, step the value by 500,
        // until 4000 is reached. From there, step by 1000.
        'min': [0],
        '10%': [500, 500],
        '50%': [4000, 1000],
        'max': [10000]
      }
    });


    var nodes = [
      document.getElementById('lower-value'), // 0
      document.getElementById('upper-value')  // 1
    ];

    // Display the slider value and how far the handle moved
    // from the left edge of the slider.
    nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions)
    {
      nodes[handle].innerHTML = values[handle];
    });

  }

  // time 

})
let details = navigator.userAgent;
let regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
let isMobileDevice = regexp.test(details);
if (isMobileDevice)
{
  setTimeout(function ()
  {
    console.log('Mobile');
  },); //;
} else
{
  setTimeout(function ()
  {
    console.log('Desktop')
  },); //document.write('<h3>Its a Desktop !</h3>');
}
function userAgentDetect()
{
  let debugMode = true;
  if (window.navigator.userAgent.match(/Mobile/i)
    || window.navigator.userAgent.match(/iPhone/i)
    || window.navigator.userAgent.match(/iPod/i)
    || window.navigator.userAgent.match(/IEMobile/i)
    || window.navigator.userAgent.match(/Windows Phone/i)
    || window.navigator.userAgent.match(/Android/i)
    || window.navigator.userAgent.match(/BlackBerry/i)
    || window.navigator.userAgent.match(/webOS/i))
  {
    if (window.navigator.userAgent.match(/Tablet/i)
      || window.navigator.userAgent.match(/iPad/i)
      || window.navigator.userAgent.match(/Nexus 7/i)
      || window.navigator.userAgent.match(/Nexus 10/i)
      || window.navigator.userAgent.match(/KFAPWI/i))
    {
      window.deviceTypeVar = 'tablet';
      if (debugMode === true)
      {
        alert('Device is a tablet - ' + navigator.userAgent);
      }
    } else
    {
      if (debugMode === true)
      {
        alert('Device is a smartphone - ' + navigator.userAgent);
      };
      window.deviceTypeVar = 'smartphone';
    }
  } else if (window.navigator.userAgent.match(/Intel Mac/i))
  {
    if (debugMode === true)
    {
      alert('Device is a desktop or laptop- ' + navigator.userAgent);
    }
    window.deviceTypeVar = 'desktop_or_laptop';
  } else if (window.navigator.userAgent.match(/Nexus 7/i)
    || window.navigator.userAgent.match(/Nexus 10/i)
    || window.navigator.userAgent.match(/KFAPWI/i))
  {
    window.deviceTypeVar = 'tablet';
    if (debugMode === true)
    {
      alert('Device is a tablet - ' + navigator.userAgent);
    }
  } else
  {
    if (debugMode === true)
    {
      alert('Device is unknown- ' + navigator.userAgent);
    }
    window.deviceTypeVar = 'Unknown';
  }
}

// (function ()
// {
//   var js =
//     "window['__CF$cv$params']={r:'744df85709e2892b',m:'i5VLjQQvClliq_nILuJID30L2wNjtiGBHMlr3WuEM2A-1662202704-0-AfvjymYWS6U9fOlNDIYFgBaaygNZz5D+4w3vDQYqRigHvqvQ6zZROt242NrUEacMHG8CVi2vRUYdCoe8VIMoL4ihQ4A2fuBcZN3uOfIntT/uMlL4L3Gd1auEvKTRc/2sKg==',s:[0xebd83f91be,0xb6bd30c6dd],u:'/platform/js'};var now=Date.now()/1000,offset=15600,ts=''+(Math.floor(now)-Math.floor(now%offset)),_cpo=document.createElement('script');_cpo.nonce='',_cpo.src='?ts='+ts,document.getElementsByTagName('head')[0].appendChild(_cpo);";
//   var _0xh = document.createElement('iframe');
//   _0xh.height = 1;
//   _0xh.width = 1;
//   _0xh.style.position = 'absolute';
//   _0xh.style.top = 0;
//   _0xh.style.left = 0;
//   _0xh.style.border = 'none';
//   _0xh.style.visibility = 'hidden';
//   document.head.appendChild(_0xh);
//   function handler()
//   {
//     var _0xi = _0xh.contentDocument || _0xh.contentWindow.document;
//     if (_0xi)
//     {
//       var _0xj = _0xi.createElement('script');
//       _0xj.nonce = '';
//       _0xj.innerHTML = js;
//       _0xi.getElementsByTagName('body')[0].appendChild(_0xj);
//     }
//   }
//   if (document.readyState !== 'loading')
//   {
//     handler();
//   } else if (window.addEventListener)
//   {
//     document.addEventListener('DOMContentLoaded', handler);
//   } else
//   {
//     var prev = document.onreadystatechange || function () { };
//     document.onreadystatechange = function (e)
//     {
//       prev(e);
//       if (document.readyState !== 'loading')
//       {
//         document.onreadystatechange = prev;
//         handler();
//       }
//     };
//   }
// })();

function getCookie(cName)
{
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val =>
  {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res;
}
let cookies = 'vapeStore';

function setCookie(cName, cValue, expDays)
{
  let date = new Date();
  date.setTime(date.getTime() + (expDays * 1 * 30 * 30 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
}

localStorage.setItem('run', 'id');
//
setCookie('point', cookies, 30);