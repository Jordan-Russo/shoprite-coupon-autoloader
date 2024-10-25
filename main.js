function loader() {
  function waitingForTarget(targetSelector) {
    const target = document.querySelector(targetSelector)
    if (target){
      clearInterval(waitingForLoad)
      setTimeout(redeemAllCoupons, 500, target)
    }
  }
  const waitingForLoad = setInterval(waitingForTarget, 50, '.coupon-app')
}

function redeemAllCoupons(target) {
  target.children[0].children[1].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[2].children[1].click()
  // clicks the "show all button"
  let coupons = document.getElementsByClassName('available-to-clip')
  for(let i = coupons.length - 1; i >= 0; i--){
    coupons[i].click()
  }
}

function showAllCoupons(){
  const couponOptions = document.querySelector('.coupon-list-options');
  const showAllButton = couponOptions.children[0].children[2].children[1];
  showAllButton.click();
}

loader()

/* unclipper for testing purposes
function unredeemAllCoupons() {
  let coupons = document.getElementsByClassName('.already-clipped-unclip')
  for(let i = coupons.length - 1; i >= 0; i--){
    coupons[i].click()
}
} */