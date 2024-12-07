export default function Header(){
    return `
        <header class="py-6 bg-stone-300">
          
            <div class="container mx-auto flex justify-between">
              <h1>Movie Shop</h1>
              <nav>
                <ul class = "flex justify-between">
                    <li class="mx-2"><a href="index.html">Home</a></li>
                    <li class="mx-2"><a href="shop.html">Shop</a></li>
                    <li class="mx-2"><a href="cart.html">Cart(0)</a></li>
                    <li class="mx-2"><a href="dashboad.html">Dashboard</a></li>
                </ul>
              </nav>

            </div>
        </header>
                    
    
    `
}

