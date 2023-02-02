<main>
    <div class="container">
        <div class="banner">
            <img src="/dps.png" class = "logo" alt="">
            <div>
                <h1>YOUR RESERVATION</h1>
                <p class = "inst">You can show this reservation at the Bookstore to skip the queue. This reservation is valid for 7 days from now. </p>
            </div>
        </div>
        <div class="res-number">
            <h3>Reservation Number</h3>
            <div class="res-no">
                <span>0</span>
                <span>1</span>
                <span>5</span>
                <span>8</span>
                <span>9</span>
                <span>0</span>

            </div>
        </div>
        <div class="order">
            <h1>Reservation Details</h1>
        <div class="product-line">
            <p>1x Register 200 PG</p><span>AED 75</span>
        </div>
        <div class="product-line">
            <p>3x Chemistry Gr11 TB</p><span>AED 40</span>
        </div>
        </div>
        <div class="footer">
            <p class = "contact">Contact 06-5441617</p>
        </div>
      </div>

</main>

<style>

main {
    padding: 1rem;
}

.logo {
    width: 100px;
}

.container {  
    display: grid;
  grid-template-columns: 2fr 2fr 2fr 1fr;
  grid-template-rows: .4fr .4fr .4fr .1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "banner banner banner res-number"
    "order order order res-number"
    "order order order res-number"
    "footer footer footer res-number";
}

.banner { 
    grid-area: banner; 
    display: flex;
    align-items: center;
    gap: 2rem;
}

.inst {
    font-size: 1.2rem;
}

.product-line {
    width: 40%;
    display: flex;
    font-size: 1.2rem;
    align-items: center;
    justify-content: space-between;
    margin-bottom: -1rem;
}
.res-number { 
    grid-area: res-number; 
}

.res-no {
    margin-top: 3rem;
    font-size: 5rem;
    display: flex;   
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.order { 
    grid-area: order; 
}

.footer { 
    grid-area: footer; 
    font-size: 1.3rem;
}

</style>