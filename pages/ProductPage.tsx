import { NextPage } from 'next';
import HeaderTop from '../components/Containers/HeaderTop/index';
import NavBar from '../components/Containers/NavBar/NavBar';
import FooterFullContainer from '../components/Containers/FooterFullContainer/FooterFullContainer';
import LabelBreaker from '../components/LabelBreaker/index';

import ProductDetailedCard from '../components/Containers/ProductDetailedCard/ProductDetailedCard';
import ProductRow from '../components/Containers/ProductRow/ProductRow';

import DivP10_F_Center from '../components/Containers/GenericContainers/DivP10_F_Center/DivP10_F_Center';


const ProductPage: NextPage = () => {
    return (<>
        <HeaderTop />
        <NavBar />

        <DivP10_F_Center style='column'>
            <ProductDetailedCard 
                labelPromo={'En Oferta'} 
                labelPromoStyle={'onSale'}
                labelPromo2nd={'Más Vendidos'} 
                labelPromo2ndStyle={'mostSold'} 
                labelPromoDisabled={false}
                labelStock={'En Stock'}
                labelStockStyle={'onStock'}
                imageURL={'https://mexx-img-2019.s3.amazonaws.com/tumb_procesador-cpu-ryzen_40369_1.jpeg?v252?v348?v928'}
                imageAlt={'Product Image'}
                productName={'Placa de video XFX AMD Radeon™ RX 6600 Speedster SWFT 210'}
                description={'Marca: ASUS // Modelo: ASUS KO GeForce RTX 3070 8GB GDDR6 // P/N: KO-RTX3070-8G-GAMING // UPC: 195553320122 // Chipset: NVIDIA GeForce RTX 3070 // Coolers: 3 // Pci Express: PCIe 4.0 16x // DirectX: 12 // OpenGl: 4.6 // Memoria: GDDR6 8GB // Bits: 192 // CUDA Cores: 5888 // Core Clock: 1755 MHz // Mem Clock: 14bps // Alimen. Suple: 2 x 8-pin // Fuente optima: 750w // VGA: No // DVI: No // HDMI: 2 // Display Port: 3 // Máximos displays soportados: 4 // Perfil Bajo: No // Backplate: Si // Dimensiones: 27.5 x 13.1 x 5.4 mm // Slots PCI-e: 2,7 // Iluminacion: Si'}
                price={'$ 1400.00'}
            />
            <LabelBreaker style={'horizontalBreaker'} />
            <ProductRow title={'Productos Similares'} style='center'/>
        </DivP10_F_Center>

        <FooterFullContainer />
    </>)
}
export default ProductPage; 