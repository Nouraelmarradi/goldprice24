import React, { useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import './Goldcalculator.css'
import Button from 'react-bootstrap/Button';
import { Table } from "react-bootstrap";
function GoldCalculator() {
  const [weight, setWeight] = useState("");
  const [unit, setUnit] = useState("");
  const [carat, setCarat] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [goldPrice, setGoldPrice] = useState("");
  const [goldPrice1, setGoldPrice1] = useState("");

  const [metalPrices, setMetalPrices] = useState(null);
  const [stringCarat,setStringCarat]= useState(null);
  const today = new Date();

  

  useEffect(() => {
    const fetchData = async (currency) => {
      try {
        const apiKey = "df806a57ce83da6e145da19b7e1aa91c"; // Replace with your actual API key
        const response = await fetch(`https://api.metalpriceapi.com/v1/carat?api_key=${apiKey}&base=${currency}&date=${today}`);
        const data = await response.json();
        setMetalPrices(data);
      } catch (error) {
        console.log('error', error);
      }
    };
  
    fetchData(''); // Call the fetchData function once when the component mounts
  }, []); // Provide an empty dependency array to execute the effect only once
  
  
  const calculateGoldPrice = async () => {
    // Convert the weight to grams for calculations
    try {
      const apiKey = "c83ecf078151604fd54f1f9358c4dbb2"; // Replace with your actual API key
      const response = await fetch(`https://api.metalpriceapi.com/v1/carat?api_key=${apiKey}&base=${currency}&date=${today}`);
      const data = await response.json();
      setGoldPrice1(data);
    } catch (error) {
      console.log('error', error);
    }
    let weightInGrams = weight;
    if (unit === "ounce") {
      weightInGrams *= 28.3495;
    } else if (unit === "kg") {
      weightInGrams *= 1000;
    } else if (unit === "tola-india") {
      weightInGrams *= 11.6638;
    } else if (unit === "gram") {
      weightInGrams *= 1;
    } // Add more conversions for other units of measurement if needed

    // Calculate the gold price based on weight, carat, and currencyca
    setStringCarat(carat.toString())
    //One carat equals 0.200 grams or 1/5 gram.
//24k gold is 100% pure gold.
//In this sample response, 24k price of 12.69083155 USD
//1 gram of 24k gold is equal to 63.45 USD ($12.69 * 5)
    let goldPrice = goldPrice1.data[stringCarat] * weightInGrams*5
   // let goldPrice = goldPrice1.price * weightInGrams * carat;
console.log(goldPrice1.price)
    // Format the gold price in the selected currency
    let formattedPrice = new Intl.NumberFormat("en-US", { style: "currency", currency }).format(goldPrice);

    // Update the state with the calculated gold price
    setGoldPrice(formattedPrice);
  };

  return (    <div >

<p className="h3_background1"  >    حاسبة سعر الذهب
    </p>
    <div className="form1">
      <Form>    
     
        <Form.Group controlId="formWeight">
          <Form.Label style={{display:'flex', justifyContent:'end'}}>الوزن</Form.Label>
          <Form.Control type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formUnit">
        <Form.Label style={{display:'flex', justifyContent:'end'}}  >وحدة القياس</Form.Label>
          <Form.Control as="select" value={unit} onChange={(e) => setUnit(e.target.value)}>
            <option value="ounce">Ounce</option>
            <option value="gram">Gram</option>
            <option value="kg">Kilo</option>
            {/* Add more options for other units of measurement if needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCarat">
        <Form.Label style={{display:'flex', justifyContent:'end'}} > قيراط</Form.Label>
          <Form.Control as="select" value={carat} onChange={(e) => setCarat(e.target.value)}>
            <option value="24k">24K (99.99% Pure Gold)</option>
            <option value="23k">23K (96% Pure Gold)</option>
            <option value="22k">22K (92% Pure Gold)</option>
            <option value="21">21K (88% Pure Gold)</option>
        <option value="20k">20K (83% Pure Gold)</option>
        <option value="18k">18K (75% Pure Gold)</option>
        <option value="16k">16K (67% Pure Gold)</option>
        <option value="14k">14K (58% Pure Gold)</option>
        <option value="12k">12K (50% Pure Gold)</option>
        <option value="9k">9K (38% Pure Gold)</option>
        <option value="8k">8K (33% Pure Gold)</option>
        <option value="6k">6K (25% Pure Gold)</option>
        
            {/* Add more options for other carat values if needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formCurrency">
        <Form.Label style={{display:'flex', justifyContent:'end'}} > العملة</Form.Label>
          <Form.Control as="select" value={currency} onChange={(e) => setCurrency(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="uae">AED</option>
        <option value="AFN">AFN</option>
        <option value="ALL">ALL</option>
        <option value="AMD">AMD</option>
        <option value="AOA">AOA</option>
        <option value="ARS">ARS</option>
        <option value="AUD">AUD</option>
        <option value="AWG">AWG</option>
        <option value="AZN">AZN</option>
        <option value="BAM">BAM</option>
        <option value="BBD">BBD</option>
        <option value="BDT">BDT</option>
        <option value="BGN">BGN</option>
        <option value="BHD">BHD</option>
        <option value="BIF">BIF</option>
        <option value="BMD">BMD</option>
        <option value="BND-">BND</option>
        <option value="BOB">BOB</option>
        <option value="BRL">BRL</option>
        <option value="BSD">BSD</option>
        <option value="BTN">BTN</option>
        <option value="BWP">BWP</option>
        <option value="BYR">BYR</option>
        <option value="BZD">BZD</option>
        <option value="CAD">CAD</option>
        <option value="CDF">CDF</option>
        <option value="CHF">CHF</option>
        <option value="CLP">CLP</option>
        <option value="CNY">CNY</option>
        <option value="COP">COP</option>
        <option value="CRC">CRC</option>
        <option value="CVE">CVE</option>
        <option value="CZK">CZK</option>
        <option value="DJF">DJF</option>
        <option value="DKK">DKK</option>
        <option value="DOP">DOP</option>
        <option value="DZD">DZD</option>
        <option value="EGP">EGP</option>
        <option value="ERN">ERN</option>
        <option value="ETB">ETB</option>
        <option value="EUR">EUR</option>
        <option value="FJD">FJD</option>
        <option value="FKP">FKP</option>
        <option value="GBP">GBP</option>
        <option value="GEL">GEL</option>
        <option value="GHS">GHS</option>
        <option value="GIP">GIP</option>
        <option value="GMD">GMD</option>
        <option value="GNF">GNF</option>
        <option value="HKD">HKD</option>
        <option value="HRK">HRK</option>
        <option value="HTG">HTG</option>
        <option value="IDR">IDR</option>
        <option value="INR">INR</option>
        <option value="IQD">IQD</option>
        <option value="IRR">IRR</option>
    
       
        <option value="KRW">KRW</option>
        <option value="KWD">KWD</option>
  
        <option value="LBP">LBP</option>
        <option value="LYD">LYD</option>
        <option value="MAD" selected="">MAD</option>
        <option value="MRO">MRO</option>
        <option value="mexico">MXN</option>
        <option value="MYR">MYR</option>
        <option value="NAD">NAD</option>
        <option value="NGN">NGN</option>
        <option value="NOK">NOK</option>
        <option value="NPR">NPR</option>
        <option value="NZD">NZD</option>
        <option value="OMR">OMR</option>
        <option value="PAB">PAB</option>
        <option value="PEN">PEN</option>
        <option value="PKR">PKR</option>
        <option value="QAR">QAR</option>
        <option value="RSD">RSD</option>
        <option value="RUB">RUB</option>
        <option value="SAR">SAR</option>
        <option value="SEK">SEK</option>
        <option value="SYP">SYP</option>
        <option value="TND">TND</option>
        <option value="TRY">TRY</option>
        <option value="UAH">UAH</option>
        <option value="USD">USD</option>
        <option value="VEF">VEF</option>
        <option value="VND">VND</option>
        <option value="VUV">VUV</option>
        <option value="WST">WST</option>
        <option value="XAF">XAF</option>
        <option value="XCD">XCD</option>
        <option value="XOF">XOF</option>
        <option value="XPF">XPF</option>
        <option value="YER">YER</option>
        <option value="YUN">YUN</option>
        <option value="ZAR">ZAR</option>
        <option value="ZMW">ZMW</option>
            {/* Add more options for other currencies if needed */}
          </Form.Control>
        </Form.Group></Form>
<br></br>
        <Button className="BottonCalcul"    onClick={calculateGoldPrice} value="Submit">       أحسب
</Button>
        <p className="gold-price">Gold Price: {goldPrice}</p>

<div>
  <h3 className="h3_background">معلومات عن غرام الذهب وسعر MAD</h3>
  <Table striped  hover bordered responsive="sm"  style={{ textAlign: "center",width:"100%" }} >


<tbody>
  <tr>
  <td>0</td><td>  1 غرام الوزن </td>		</tr>
  
  <tr>
    <td>0</td><td>اليوم 1 دولار أمريكي</td>
  </tr>
  <tr><td>0</td><td>اليوم 1 درهم:</td></tr>
</tbody>

  </Table>
</div>
<div><h3 className="h3_background">
وصف حاسبة أسعار الذهب

</h3>
<p className="paragraph">مرحبًا بكم في حاسبة أسعار الذهب ، وهي أداة شاملة مصممة لمساعدتك في تحديد أسعار الذهب باستخدام أوزان مختلفة (على سبيل المثال ، جرام ، كيلوجرام ، أونصة ، تولة ، تيل ، راتي ، ماشا ، بهوري ، باهت ، إلخ) ، عيارات (على سبيل المثال ، عيار 24 ، 22 قيراط ، 21 قيراط ، 18 قيراط ، 16 قيراط ، 14 قيراط ، 10 قيراط ، إلخ) والعملات من جميع أنحاء العالم. تعتمد الآلة الحاسبة الخاصة بنا على أسعار الذهب الفورية المحدثة وتعرض جميع الأسعار بالتوقيت المحلي للمغرب من أجل راحتك.</p>
</div>
<div> <h3 className="h3_background">كيف تحسب سعر الذهب؟</h3>
<p className="paragraph">إذا كنت تعرف النقاء (على سبيل المثال ، مستوى القيراط ، على سبيل المثال ، 22 كيلو ، 18 كيلو ، 24 كيلو ، إلخ) ، وحدة الوزن (على سبيل المثال ، جرام ، أونصة ، تولة ، إلخ) ، والعملة التي تريدها (على سبيل المثال ، الجنيه البريطاني ، الجنيه الاسترليني ، الدولار الأمريكي ، اليورو ، الروبية الهندية ، إلخ). ثم قدم هذه التفاصيل في القائمة المنسدلة المذكورة أعلاه ، وسترى آخر حساب لسعر الذهب في الوقت الفعلي بعملتك المقدمة.</p></div>
</div>



</div>)}
        
export default GoldCalculator;