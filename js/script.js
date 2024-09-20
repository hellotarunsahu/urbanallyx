let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section" style="border: 2rem solid #451073; border-top-left-radius: 7rem; border-top-right-radius: 7rem; background: #451073; color:white;">
        <div class="container-fluid" >
          <div class="footer" >
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">UrbanAlly</a>
              <p>We involves planning, designing, and building structures like homes, bridges,architectural plans into physical realities.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">

              

            </div>
            <div class="quike-links " >
              <ul>
                <li>
                  <b>Address</b>
                  <p> Tezpur ,</br>
                  Assam, India 784028</p>
                  
                </li>
                
                <li>
                  <b>Email:</b> contacturbanally@gmail.com
                </li>
                
              </ul>
            </div>

            <div class="quike-links ">
              <ul>
                <li>
                  <a href="index.html" style = "color:white;">Home</a>
                </li>
                <li>
                  <a href="services.html" style = "color:white;">Services</a>
                </li>
                <li>
                  <a href="projects.html" style = "color:white;">Projects</a>
                </li>
                <li><a href="about.html" style = "color:white;">About Me</a></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

// <li>
//                   <b>Contact No.:</b> +91- 6206834993 
//                 </li>


{/* <div class="social-links text-center">
              <a href="https://www.linkedin.com/in/iamdivyak/"><img src="./img/LinkedIn Circled.png" alt="linkedin" ></a><br>
              <!-- <a href=""><img src="./img/Instagram.png" alt="Instagram"></a><br> -->
              <a href="https://twitter.com/Imdivyakumari"> <img src="./img/Twitter.png" alt="twitter"></a><br>
              <a href="https://github.com/Iamdivyak"><img src="./img/GitHub.png" alt="github"></a>  
              
            </div> */}


// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled 
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);
