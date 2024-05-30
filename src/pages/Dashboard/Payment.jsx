import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import SectionHeading from "../../components/Shared/SectionHeading";
import CheckoutForm from "./CheckoutForm";

// TODO: add publicable key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

const Payment = () => {
  return (
    <div>
      <SectionHeading title={"Payment"} text={"Please pay to eat"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
