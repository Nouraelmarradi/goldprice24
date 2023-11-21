import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import './prices.css'
import Chart from './pages/chart'
function Prices() {
  const [goldPrice, setGoldPrice] = useState(null);
  var myHeaders = new Headers();
  const [metalPrices, setMetalPrices] = useState(null);

 
      const today = new Date();

 /* var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };*/
  useEffect(() => {
    const fetchMetalPrices = async () => {
      try {
        const apiKey = "c83ecf078151604fd54f1f9358c4dbb2"; // Replace with your actual API key
        const response = await fetch(`https://api.metalpriceapi.com/v1/carat?api_key=${apiKey}&base=MAD&date=${today}`);
        const data = await response.json();
        setMetalPrices(data);
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchMetalPrices();
  }, []);

  return (
    <div>
      <div className='nationdesc'>
        <p className='table_title' >سعر الذهب اليوم فى مصر</p>
        <p className='paragraph'>
      تحتوي الصفحة علي تقرير دوري ومتجدد بأسعار معدن الذهب اليوم في مصر بالعملة الوطنية الجنيه المصري وأيضا الدولار الأمريكي.

يشمل التقرير أسعار المعدن بجميع عياراته (عيار 24, 22, 18, 14, 12) فى مصر.

وتحتوي أيضا علي مخطط بمعدل الارتفاع والانخفاض فى اسعار الذهب اليوم فى مصر في الأيام السابقة في السوق المصري.

حيث يتم متابعة أسعار الذهب اليوم في مصر مرة كل 12 ساعة يوميا وذلك حسب توقيت القاهرة</p>
      </div>
<div className='chart'><Chart></Chart></div>

      {metalPrices ? (
        <div>
                  <p className='table_title'>متوسط اسعار الذهب اليوم بمحلات الصاغة فى مصر بدون مصنعية</p>

<Table striped  hover bordered responsive="sm"  style={{ textAlign: "center",width:"100%" }} >

	<thead style={{textDecorationColor:"#303030",color:"black"}}>
		<tr>
    <th>  دولار أمريكى</th> <th>بالجنيه المصري</th><th>   الوحدة  </th>
            
		</tr>
	</thead>
	<tbody>
		<tr>
    <td>1</td><td>{metalPrices.data["24K"]}</td>	<th>اسعار الذهب عيار 24</th>	</tr>

			
		<tr>
    <td>2</td><td>{metalPrices.data["23K"]}</td>	
			<th>اسعار الذهب عيار23</th>
			
		</tr>
		<tr>
    <td>3</td> <td>{metalPrices.data["22K"]}</td>	
			<th>اسعار الذهب عيار 22</th>
           		</tr>
               <tr>
               <td>4</td> <td>{metalPrices.data["21K"]}</td>	
			<th>اسعار الذهب عيار 21</th>
            		</tr><tr>
                <td>5</td><td>{metalPrices.data["18K"]}</td>	
			<th colSpan={6}>اسعار الذهب عيار 18</th>
            		</tr><tr>
                <td>6</td><td>{metalPrices.data["16K"]}</td>	
			<th>اسعار الذهب عيار 16</th>
            		</tr>
                <tr>
                <td>7</td><td>{metalPrices.data["14K"]}</td>	
			<th>اسعار الذهب عيار 14</th>
            		</tr>
                <tr>
                <td>8</td><td>{metalPrices.data["12K"]}</td>	
			<th>اسعار الذهب عيار 12</th>
            		</tr>
               
                <tr>
                <td>7</td><td>{metalPrices.data["10K"]}</td>	
			<th>اسعار الذهب عيار 10</th>
            		</tr>
                <tr>
                <td>9</td><td>{metalPrices.data["9K"]}</td>	
			<th>اسعار الذهب عيار 9</th>
            		</tr> 
                <tr>
                <td>10</td><td>{metalPrices.data["6k"]}</td>	
			<th>اسعار الذهب عيار 6</th>
            		</tr>
            </tbody>
            
    </Table>

    
		
       
</div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Prices;