import './Hero.css'
import React from 'react'
import Heroimg from '../../assets/images/hero.jpg'
import Advanced_Search from '../Advanced_Search/AdvancedSearch'

function Hero ()  {
    return(
        <section className="hero-area bg-1 text-center " style={{backgroundImage: "url(" + Heroimg + ")" }}>
        	{/* <!-- Container Start --> */}
        	<div className="container  ">
        		<div className="row ">
        			<div className="col-md-12">
        				{/* <!-- Header Contetnt --> */}
        				<div className="content-block" >
        					<h1>خير وبركة </h1>
        					<p>خير و بركة مبادره وقفيه....ريعها يعود للمحتاجين من أبناء طرابلس
زبائننا الكرام انتم..شركاؤنا في هذا العمل الطيب</p>
        					<div className="short-popular-category-list text-center">
        						<h2>الاصناف الشعبية</h2>
        						<ul className="list-inline">
        							<li className="list-inline-item">
        								<a href="category.html"><i className="fa fa-money"></i> صدقة وزكاة</a></li>
        							<li className="list-inline-item">
        								<a href="category.html"><i className="fa fa-cheese"></i> البان واجبان</a>
        							</li>
        							<li className="list-inline-item">
        								<a href="category.html"><i className="fa fa-tshirt"></i> بيجامات</a>
        							</li>
        							<li className="list-inline-item">
        								<a href="category.html"><i className="fa fa-gift"></i> اكسسوارات وهدايا</a>
        							</li>
        							<li className="list-inline-item">
        								<a href="category.html"><i className="fa fa-cookie"></i> حلويات</a>
        							</li>
        						</ul>
        					</div>
            
        				</div>
        				
            
        			</div>
					<Advanced_Search />
        		</div>
        	</div>
        	{/* <!-- Container End --> */}
        </section>
    )
}


export default Hero