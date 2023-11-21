import React from 'react';
import '../../App.css';
import './NationLists.css';
import egypt from "../../images/egypt.png";
import kuwit from "../../images/kuwit.png";
import soudiarabia from "../../images/soudiarabia.png";
import UAE from "../../images/UAE.png";
import Qatar from "../../images/Qatar.png";
import yamen from "../../images/yamen.png";
import ordon from "../../images/ordon.png";
import irak from "../../images/irak.png";
import lebenon from "../../images/lebenon.png";
import aaman from "../../images/aaman.png";
import bahrain from "../../images/bahrain.png";
import algerie from "../../images/algerie.png";
import maroc from "../../images/maroc.png";
import palestiness from "../../images/palestine.png";





function NationLists() {
  return (
    <div  className="countries">
                <ul className='ul'>
                  <h4> <p className="color"><a href="https://www.w3schools.com/tags/att_img_alt.asp" >اسعار الذهب اليوم في الدول العربية</a></p></h4>
<li className='li'><a className='a' id="egypt" href="/prices" title="سعار الذهب اليوم فى مصر">اسعار الذهب اليوم فى مصر</a>
<img  className='img' src={egypt} alt="s"/></li>
<li className='li'><a  className='a' id="kuwit" href="https://www.w3schools.com/tags/att_img_alt.asp" title="سعار الذهب اليوم فى مصر">اسعار الذهب اليوم في الكويت</a><img className='img' src={kuwit} alt="s" ></img></li>
<li className='li'><a  className='a' id="soudiarabia" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في السعودية</a><img className='img' src={soudiarabia} alt="s"/></li>
<li className='li'><a className='a' id="UAE" href="https://www.w3schools.com/tags/att_img_alt.asp">      اسعار الذهب اليوم في الامارات</a><img className='img' src={UAE} alt="s"/></li>
<li className='li'><a className='a' id="Qatar" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم فى قطر</a><img className='img' src={Qatar} alt="q"/></li>
<li className='li'><a className='a' id="yamen" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في اليمن</a><img className='img' src={yamen} alt="q"/></li>
<li className='li'><a className='a' id="ordon" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في الاردن</a><img  className='img'  src={ordon} alt="s"></img></li>
<li className='li'><a className='a' id="irak" href="https://www.w3schools.com/tags/att_img_alt.asp.html">اسعار الذهب اليوم في العراق</a><img className='img' src={irak} alt="l"/></li>
<li className='li'><a className='a' id="lebenon" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في لبنان</a><img className='img' src={lebenon} alt="j"/></li>
<li className='li'><a  className='a' id="aaman" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في عمان</a><img className='img' src={aaman} alt="g"/></li>
<li className='li'><a className='a' id="bahrain" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في البحرين</a><img className='img' src={bahrain} alt="g"/></li>
<li className='li'><a className='a' id="algerie" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في الجزائر</a><img className='img' src={algerie} alt="g"/></li>
<li className='li'><a  className='a' id="maroc" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في المغرب</a><img className='img' src={maroc} alt="m"/></li>
<li className='li'><a className='a' id="palestine" href="https://www.w3schools.com/tags/att_img_alt.asp">اسعار الذهب اليوم في فلسطين</a><img  className='img' src={palestiness} alt="k"/></li>
        </ul>
            </div>
  );
}

export default NationLists;