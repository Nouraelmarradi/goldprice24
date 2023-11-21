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
        const apiKey = "73922aaed1ed34addd6201f562c1069d"; // Replace with your actual API key
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
    <td>$58.63</td><td>1,812 جنيه</td>	<th>اسعار الذهب عيار 24</th>	</tr>

			
		<tr>
    <td>$53.74</td><td>1,661 جنيه	</td>	
			<th>اسعار الذهب عيار23</th>
			
		</tr>
		<tr>
    <td>$53</td> <td>1,661 جنيه</td>	
			<th>اسعار الذهب عيار 22</th>
           		</tr>
               <tr>
               <td>$51.30
</td> <td>1,585 جنيه</td>	
			<th>اسعار الذهب عيار 21</th>
            		</tr><tr>
                <td>$43.97
</td><td>1,359 جنيه</td>	
			<th colSpan={6}>اسعار الذهب عيار 18</th>
            		</tr><tr>
                <td>$43</td><td>1,057 جنيه	</td>	
			<th>اسعار الذهب عيار 16</th>
            		</tr>
                <tr>
                <td>34$</td><td>1,057 جنيه	</td>	
			<th>اسعار الذهب عيار 14</th>
            		</tr>
                <tr>
                <td>$29</td><td>905.84 جنيه	</td>	
			<th>اسعار الذهب عيار 12</th>
            		</tr>
               
                
                <tr>
                <td>19$</td><td>679.38 جنيه	           </td>	
			<th>اسعار الذهب عيار 9</th>
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