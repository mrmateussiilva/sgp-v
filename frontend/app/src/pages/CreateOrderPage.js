import CreateOrder from '../components/CreateOrder';
import FormOrder from '../components/formOrder';

function CreateOrderPage() {
    return (
        <div className="container">
            <CreateOrder />
            <FormOrder />

            {/* Outros componentes do pedido, como itens, valores, etc. */}
        </div>
    );
}


export default CreateOrderPage;