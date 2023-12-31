
window.onload = function() {
    // Create elements
    var footer = document.createElement('div');
    var footerContent = document.createElement('div');
    var footerMain = document.createElement('div');
    var footerTop = document.createElement('div');
    var footerLeftColumn = document.createElement('div');
    var footerLeftContent1 = document.createElement('div');
    var footerLogo = document.createElement('h2');
    var footerLeftContent2 = document.createElement('div');
    var footerLink = document.createElement('a');
    var footerLinkSpan = document.createElement('span');
    var footerSection2 = document.createElement('div');
    var footerFollowMore = document.createElement('h2');
    var footerIcon = document.createElement('ul');
    var footerIconItem1 = document.createElement('li');
    var footerIconLink1 = document.createElement('a');
    var footerIconItem2 = document.createElement('li');
    var footerIconLink2 = document.createElement('a');
    var footerIconItem3 = document.createElement('li');
    var footerIconLink3 = document.createElement('a');
    var footerBottom = document.createElement('div');

    // Set classes
    footer.className = 'Footer';
    footerContent.className = 'Footer-content';
    footerMain.className = 'Footer-main';
    footerTop.className = 'Footer-top';
    footerLeftColumn.className = 'Footer_left_column';
    footerLeftContent1.className = 'Footer-left-content1';
    footerLogo.className = 'Footer-logo';
    footerLeftContent2.className = 'Footer-left-content2';
    footerLink.className = 'Footer-left-content2-link';
    footerSection2.className = 'Footer-section2';
    footerIcon.className = 'Footer-icon';
    footerBottom.className = 'Footer-bottom';

    // Set content
    footerLogo.textContent = 'Keybolic';
    footerLeftContent2.innerHTML = 'Ask us anything, we are here to help.<br>';
    footerLink.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    footerLink.target = '_blank';
    footerLinkSpan.textContent = 'abcxyz@gmail.com';
    footerFollowMore.textContent = 'Follow more';
    footerIconLink1.innerHTML = '<i class="fa-brands fa-facebook"></i>';
    footerIconLink2.innerHTML = '<i class="fa-brands fa-instagram"></i>';
    footerIconLink3.innerHTML = '<i class="fa-brands fa-discord"></i>';
    footerBottom.textContent = '&copy; Zthoang.github.io | All Rights Reserved';

    // Append elements
    footerLink.appendChild(footerLinkSpan);
    footerLeftContent2.appendChild(footerLink);
    footerLeftContent1.appendChild(footerLogo);
    footerLeftContent1.appendChild(footerLeftContent2);
    footerIconItem1.appendChild(footerIconLink1);
    footerIconItem2.appendChild(footerIconLink2);
    footerIconItem3.appendChild(footerIconLink3);
    footerIcon.appendChild(footerIconItem1);
    footerIcon.appendChild(footerIconItem2);
    footerIcon.appendChild(footerIconItem3);
    footerSection2.appendChild(footerFollowMore);
    footerSection2.appendChild(footerIcon);
    footerLeftColumn.appendChild(footerLeftContent1);
    footerLeftColumn.appendChild(footerSection2);
    footerTop.appendChild(footerLeftColumn);
    footerMain.appendChild(footerTop);
    footerContent.appendChild(footerMain);
    footerContent.appendChild(footerBottom);
    footer.appendChild(footerContent);

    // Append the footer to the body
    document.body.appendChild(footer);
}