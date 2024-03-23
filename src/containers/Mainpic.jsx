import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Mainpic() {
    return (
        <div className='mainslide'>
            <div id="myCarousel" class="carousel slide mb-6" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active carousel-item-start mypic">
                    <img class="bd-placeholder-img" width="100%" height="100%" src="m1.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                      
                    </div>
                    <div class="carousel-item carousel-item-next carousel-item-start mypic">
                    <img class="bd-placeholder-img" width="100%" height="100%" src="m2.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                        
                    </div>
                    <div class="carousel-item mypic">
                    <img class="bd-placeholder-img" width="100%" height="100%" src="m3.jpg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" />
                       
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
