function loader() {
	const waitingForLoad = setInterval(showAllCoupons, 150, '#facet-all-coupons')
	function showAllCoupons(targetSelector) {
		const target = document.querySelector(targetSelector)
		if (target){
			clearInterval(waitingForLoad)
			target.click()
			setTimeout(loadAllButtons, 1000)
		}
	}
}

function findNewCoupons(){
	let coupons = document.getElementsByClassName('btn-load-to-card')
	return coupons
}

async function loadAllButtons(){
	let coupons = findNewCoupons();
	let availableCouponCount = coupons.length
	let hasNewCoupons = availableCouponCount > 0
	while(hasNewCoupons){
		coupons[coupons.length - 1].scrollIntoView({behavior: 'instant', block: 'end' })
		await new Promise(resolve => setTimeout(resolve, 250))
		const newCoupons = findNewCoupons()
		if(newCoupons.length === availableCouponCount){
			hasNewCoupons = false
			coupons = newCoupons
		}
		availableCouponCount = newCoupons.length
	}
	for(let i = coupons.length - 1; i >= 0; i--){
		coupons[i].click()
	}
}

loader()