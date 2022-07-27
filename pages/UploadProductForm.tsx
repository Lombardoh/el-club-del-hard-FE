import { NextPage } from 'next';
import FormUploadProduct from '../components/Containers/FormUploadProduct/index';

const UploadProductForm: NextPage = () => {
    return (<>
        <div style={{
            display:'flex', 
            flexDirection:'row', 
            justifyContent:'center', 
            alignItems:'center',
            width:'100%',
            height:'100%',
            padding: '50px'
        }}>
            <FormUploadProduct />
        </div>
    </>)
}
export default UploadProductForm; 