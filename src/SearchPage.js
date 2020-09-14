import React from 'react'
import './SearchPage.css'
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
function SearchPage() {
    return (
        <div className='searchPage'>
        <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>       
        </div>
        <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in center of London"
                title="Stay at this spacious Edwardian House"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.73}
                price="£30 / night"
                total="£117 total"
            />

            <SearchResult
                img="data:image/jpeg;base64,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"
                location="Private room in center of London"
                title="Independant luxury studio apartment"
                description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
                star={4.3}
                price="£40 / night"
                total="£157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="£35 / night"
                total="£207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="£55 / night"
                total="£320 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="£60 / night"
                total="£450 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="£65 / night"
                total="£480 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="£90 / night"
                total="£650 total"
            />
        </div>
    )
}

export default SearchPage 
