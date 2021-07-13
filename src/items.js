const MenuItems  =({item})  => {
	const rupee ='\u20B9'
	return (
		 
		<div className='section-center'>
		{
			item.map((allitems) => {
				const {img, title, price, desc} = allitems
				return <article className='menu-item' key = {allitems.id} >
				<img src={img} alt ={title} className='photo' />
				<div className='item-info'>
				<header>
				<h4> {title}</h4>
				<h4 className= 'price'> {rupee} {price} </h4>
				</header>
				<p> {desc} </p>
				</div>

				</article>
			})
		}
		</div>
		 
		)

} 
export default MenuItems