import React,{useState,useRef} from 'react'
import LoadingBar from 'react-top-loading-bar'

import { SideSliderContext } from './context/SideSliderContext'

import {Header,PopUpWithForm,HomeCards} from "./components"
import {carRentalImg,ewalletImg,marketingImg,seoImg,startUpImg,vrImg} from "./assets/HomeAssets"

import imgBottom from "./assets/awards-logo.png"



import "./style.scss"
const App = () => {
  
  const [progress, setProgress] = useState(0)
  const loadingBar = useRef(null);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
    loadingBar.current.continuousStart();
  };


  const [sideSliderStatus, setSideSliderStatus] = useState(false)




  return (
    <div onScroll={()=>updateProgress(`20%`)} >
      <LoadingBar
        color='#f11946'
        ref={loadingBar}
      />
      <SideSliderContext.Provider value={{sideSliderStatus,setSideSliderStatus}}>
        <Header />
        <PopUpWithForm />


        <div className="landingPage">
          <div className="leftDetails">
            <div className="menu">
              <p>WEB.</p>
              <p>MOBILE.</p>
              <p>GRAPHICS.</p>
              <p>MARKETING.</p>
            </div>
            <div className="desc">
              Website and App development solution for transforming and innovating businesses.  
            </div>
            <div className="viewCaseStudyBtn">
              View Case Study
            </div>
            <div className="leftBottomImg">
              <img src={imgBottom} alt="" />
            </div>
          </div>

          <div className="rightDetails">
           <HomeCards image={carRentalImg}  title={"Rent Car"} color={""} />
          </div>

        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nemo assumenda unde repudiandae? A necessitatibus nobis cumque consequatur eligendi amet suscipit quidem. Ipsa expedita, excepturi veritatis, error provident possimus asperiores exercitationem at quis illo rerum voluptatum et commodi iusto odit fuga laboriosam odio cupiditate perferendis repellendus vel earum cumque obcaecati vitae. Eveniet, officiis sunt impedit et iste placeat quo possimus quas assumenda dolorum optio repudiandae enim, incidunt molestiae nesciunt magnam odit iusto dolor in quasi cupiditate labore porro tempora. Natus, architecto, illo error dolor quod repudiandae dolorum quia velit odit ducimus nostrum sunt nulla dignissimos iure laudantium cum fugiat nesciunt unde exercitationem itaque accusantium a dolores. Nisi officia provident distinctio deleniti harum pariatur dignissimos possimus quia quasi laudantium, necessitatibus totam, eius amet veniam inventore consectetur optio maiores! Ipsum deserunt sapiente quis soluta eius dolore maxime possimus nemo. Unde quasi voluptatibus assumenda ipsam laboriosam neque quaerat, aut quas enim voluptas, autem fugit omnis sunt animi quisquam sed sapiente maiores molestias ut sint odio. Recusandae corrupti neque magnam sit possimus id perferendis, quibusdam nam minima temporibus! Et accusamus rerum vitae eveniet molestiae repudiandae reiciendis, sapiente minima praesentium ipsa aliquam? Et accusamus quos voluptas ab aut consectetur ex modi, inventore veniam ducimus, libero illo quaerat sunt magnam quae tempore quasi neque, quisquam enim repudiandae explicabo non eius provident beatae. Impedit sint nihil magnam sed, repudiandae earum aperiam explicabo velit ullam atque deserunt architecto asperiores. Quo facilis voluptatibus dicta perferendis quaerat inventore obcaecati perspiciatis, velit officiis ab sunt blanditiis eaque ipsam saepe, illum tempore ullam magnam, beatae adipisci nostrum exercitationem? Tempora alias minus itaque, impedit soluta nulla labore. Aspernatur nulla odit animi suscipit beatae! Ipsum, nobis. Deserunt, exercitationem ad numquam beatae placeat unde cupiditate soluta dicta et praesentium amet. Nihil, delectus harum iure dicta modi blanditiis mollitia obcaecati ut iste cumque nam provident exercitationem aspernatur officia. Tempore consequatur molestiae doloribus possimus ipsa aliquid cum, voluptatum pariatur eum dignissimos ex. Repudiandae odit minima dicta saepe, beatae enim iste consectetur debitis vel quae unde quos ad illum assumenda perspiciatis eveniet nostrum id alias dolor nemo temporibus commodi! Neque iusto adipisci ullam ratione nobis dolorem nesciunt fuga sint labore optio facere architecto soluta natus quibusdam alias distinctio porro, magnam recusandae illo ea dolor aliquid ut exercitationem. Rem perferendis molestiae est quisquam laborum nihil ratione voluptate odit sit omnis ducimus recusandae pariatur quae blanditiis dolor voluptatem alias quo eos voluptatum, similique aspernatur necessitatibus harum? Ipsam necessitatibus, est iste unde cumque harum, voluptatibus numquam illo amet illum sint obcaecati provident corporis dicta molestias! Velit doloribus ab neque est assumenda nostrum, beatae vero quod quidem modi quae laboriosam sit exercitationem ipsam explicabo, sunt cupiditate totam unde, nisi aliquid adipisci! Ad dolorum repellendus similique deleniti? Temporibus unde animi harum delectus quibusdam odit eum, dolores pariatur cupiditate quia odio soluta illo corrupti laudantium ipsum libero sequi! Unde, laboriosam animi hic qui in, error facilis dolorem at aliquid quo quasi ipsum natus expedita molestias eius vel perferendis aut odio ad? Dolore fugiat id beatae officiis itaque pariatur voluptates, perspiciatis hic corporis nesciunt eaque illum obcaecati accusamus, assumenda repellat quis possimus eligendi, perferendis sunt labore amet ipsa ratione? Officiis odio placeat amet accusantium possimus blanditiis repellat aliquid voluptate. Exercitationem quidem repellat magnam eligendi necessitatibus animi rem iusto ut id, impedit cumque rerum natus cum reiciendis harum provident voluptate atque, sed fugit accusamus labore hic sint. Voluptatibus corporis, ab vel sint molestiae tempora illo! Laboriosam tempore officia necessitatibus! Expedita architecto veniam officia non nostrum ex assumenda, nam animi aut. Laboriosam aliquid eligendi consectetur quo nemo ad corrupti adipisci libero aperiam sed? Tempora repudiandae dicta blanditiis sit praesentium quae quaerat explicabo dolores culpa voluptates adipisci, harum reiciendis natus mollitia. Odit nisi accusantium ullam quisquam, atque autem. Dicta voluptates excepturi explicabo minima unde perspiciatis optio, reprehenderit non molestias? Enim dolorum eos, ducimus voluptates deleniti dignissimos assumenda veritatis nihil totam excepturi provident, animi officia. Mollitia exercitationem illo, expedita magni voluptates deserunt a nam repellat ad iure animi alias soluta distinctio cum rerum debitis aspernatur esse. Nulla, iure quo quam explicabo aliquam esse autem. Reprehenderit vero, dolorum voluptatem similique, itaque assumenda animi, amet laboriosam tempore labore earum esse repellat sapiente nesciunt fugiat! Perspiciatis, molestiae laudantium. Quod magnam accusamus aspernatur doloribus vitae asperiores, culpa ratione maiores quibusdam voluptates expedita nisi in architecto delectus unde inventore aut odit perferendis quae similique rerum minus? Doloremque quam deserunt mollitia sapiente minima, provident exercitationem nostrum nemo libero? Animi quis porro deserunt nihil qui esse optio, non consequuntur incidunt fugiat maxime error dolor ipsum assumenda tempore iste, temporibus tempora delectus accusamus! Odio, nam dolor! Ullam numquam ipsam adipisci iure atque deleniti non culpa ex ipsa enim illum aliquid voluptatum perspiciatis corporis at perferendis quia minus eius, libero autem, alias aut! Quas nulla aliquid quaerat deleniti omnis ut esse repudiandae rerum? Voluptate, fuga? Atque reprehenderit tenetur accusantium adipisci aut, eos neque itaque ab dolorum officiis. Accusantium repellat, quasi deserunt expedita magnam eligendi ratione fugit? Labore hic reiciendis voluptas cupiditate aperiam iure dignissimos dolorum ex aliquam perspiciatis error, veniam officiis molestiae assumenda animi incidunt dicta laboriosam ea ducimus ipsum, amet suscipit recusandae. Accusantium sed nihil error perferendis nisi enim et ipsam quia, rerum temporibus cum deleniti aut? Reiciendis blanditiis odio eius laboriosam delectus, doloribus itaque accusantium eveniet, alias amet omnis. Nobis corporis, rem hic laboriosam ut inventore dolore eum iusto architecto natus aperiam eius, doloremque porro optio ab quas ducimus voluptatibus ipsa voluptate molestias a? Ipsam optio recusandae laborum dicta expedita corporis rerum excepturi eligendi. Officia unde doloribus nobis repellendus quis odio delectus sint laboriosam molestiae nulla soluta architecto, itaque aliquam sit nisi a? Maxime sapiente animi doloremque corporis asperiores nostrum sit minima sint quia magni cum dolorum neque iste quas eius eveniet fugit rerum quam amet excepturi esse, nam modi. Explicabo, recusandae possimus nulla ipsum minima, iusto neque repellat placeat tenetur odio sunt quaerat ratione officia architecto laudantium sit? Eligendi vitae ipsam culpa ullam. Ullam asperiores voluptate itaque ducimus quos commodi impedit quod reprehenderit nesciunt accusantium. Sit, dolorum temporibus. Molestiae, natus! Explicabo harum architecto ducimus at. Fugit deleniti dolores odit neque reprehenderit explicabo nesciunt delectus architecto!
        </div>

      </SideSliderContext.Provider>
    </div>
  )
}

export default App