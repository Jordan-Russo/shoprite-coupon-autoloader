function loader() {
	const waitingForLoad = setInterval(showAllCoupons, 150, '.coupon-list-options button.ng-star-inserted')
	function showAllCoupons(targetSelector) {
		const target = document.querySelector(targetSelector)
		if (target){
			clearInterval(waitingForLoad)
			target.click()
			setTimeout(redeemAllCoupons, 1000)
		}
	}
}

function redeemAllCoupons() {
	const getCoupons = () =>  document.getElementsByClassName('available-to-clip')
	let coupons;
	const waitForCoupons = setInterval(() => {
		coupons = getCoupons()
		if(coupons.length > 0){
			clearInterval(waitForCoupons)
			for(let i = coupons.length - 1; i >= 0; i--){
				coupons[i].click()
			}
		}
	}, 200)
}

loader()

/* unclipper for testing purposes
function unredeemAllCoupons() {
	let coupons = document.getElementsByClassName('already-clipped-unclip')
	for(let i = coupons.length - 1; i >= 0; i--){
		coupons[i].click()
	}
}
unredeemAllCoupons()
*/