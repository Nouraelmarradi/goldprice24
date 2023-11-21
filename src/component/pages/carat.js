import React from 'react';
import Table from 'react-bootstrap/Table';
import Chart from './chart'
import '../prices.css'
function Prices() {
 

 

 /* var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };*/
 

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
    <td>1</td><td></td>	<th>اسعار الذهب عيار 24</th>	</tr>

			
		<tr>
    <td>2</td><td></td>	
			<th>اسعار الذهب عيار23</th>
			
		</tr>
		<tr>
    <td>3</td> <td></td>	
			<th>اسعار الذهب عيار 22</th>
           		</tr>
               <tr>
               <td>4</td> <td></td>	
			<th>اسعار الذهب عيار 21</th>
            		</tr><tr>
                <td>5</td><td></td>	
			<th colSpan={6}>اسعار الذهب عيار 18</th>
            		</tr><tr>
                <td>6</td><td></td>	
			<th>اسعار الذهب عيار 16</th>
            		</tr>
                <tr>
                <td>7</td><td></td>	
			<th>اسعار الذهب عيار 14</th>
            		</tr>
                <tr>
                <td>8</td><td></td>	
			<th>اسعار الذهب عيار 12</th>
            		</tr>
               
                <tr>
                <td>7</td><td></td>	
			<th>اسعار الذهب عيار 10</th>
            		</tr>
                <tr>
                <td>9</td><td></td>	
			<th>اسعار الذهب عيار 9</th>
            		</tr> 
                <tr>
                <td>10</td><td></td>	
			<th>اسعار الذهب عيار 6</th>
            		</tr>
            </tbody>
            
    </Table>

    
		
       
</div>

    </div>
  );
}
export default Prices;