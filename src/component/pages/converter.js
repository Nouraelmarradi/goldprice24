import React from "react";
import './Goldcalculator.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState,useEffect } from "react";
function Converter() {
    const [currency, setCurrency] = useState("USD");
    const [currency1, setCurrency1] = useState("MAD");
    const[amount,setAmount]=useState();
    const[result,setResult]=useState("")
    const[formatDate,setFormatDate]=useState()

    const today = new Date();
    const fetchData = async (currency,currency1,amount) => {
        try {
          const apiKey = "901be61da9743931f8ac765fed19499d"; // Replace with your actual API key
          const response = await fetch(`https://api.metalpriceapi.com/v1/convert?api_key=${apiKey}&from=${currency}&to=${currency1}&amount=${amount}&date=${formatDate}`);
          const data = await response.json();
          setResult(data);
        } catch (error) {
          console.log('error', error);
        }
      };
    
    useEffect(() => {
       
        fetchData(''); // Call the fetchData function once when the component mounts
      }, []); // Provide an empty dependency array to execute the effect only once
       
      
  const calcul = async () => {
    const day = String(today.getDate()-1).padStart(2, "0");
        const month = String(today.getMonth() + 1).padStart(2, "0");
        const year = today.getFullYear();
        setFormatDate(`${year}-${month}-${day}`)
    // Convert the weight to grams for calculations

    try {
      const apiKey = "901be61da9743931f8ac765fed19499d"; // Replace with your actual API key
      const response = await fetch(`https://api.metalpriceapi.com/v1/convert?api_key=${apiKey}&from=${currency}&to=${currency1}&amount=${amount}&date=${formatDate}`);
      const data = await response.json();
      setResult(data);
      console.log(result)
      console.log(formatDate)
console.log(currency)
console.log(currency1)


    } catch (error) {
      console.log('error', error);
    }
    
  };

    return (    <div >

        <p className="h3_background1"  >   محول العملات
            </p>
            <div className="form1">
              <Form>    
             
                <Form.Group controlId="formWeight">
                  <Form.Label style={{display:'flex', justifyContent:'end'}}>مبلغ</Form.Label>
                  <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  />
                </Form.Group>
        
                
        
                <Form.Group controlId="formCurrency">
                <Form.Label style={{display:'flex', justifyContent:'end'}} > من العملة </Form.Label>
                  <Form.Control as="select" value={currency} onChange={(e) => setCurrency(e.target.value)} >
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
                </Form.Group>
                <Form.Group controlId="formCurrency">
                <Form.Label style={{display:'flex', justifyContent:'end'}} > إلى العملة </Form.Label>
                  <Form.Control as="select" value={currency1} onChange={(e) => setCurrency1(e.target.value)}  >
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
                </Form.Group>
                </Form>
                
        <br></br>
                <Button className="BottonCalcul"    value="Submit" onClick={calcul}>        تحويل
        </Button>
                <p className="gold-price">{result?.result}{' '}{currency1} </p>
        
       </div> </div>)
}
export default Converter;
