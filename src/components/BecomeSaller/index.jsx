import { useRef, useState, useEffect } from "react";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import { Select, Button, Text } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { useDisclosure, useClipboard } from "@mantine/hooks";
import { Modal, Group, UnstyledButton } from "@mantine/core";
import axios from "axios";
import { API_URL } from "../../config";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const PRODUCT_CATEGORY = [
  { value: "Electronics and Gadgets", label: "Electronic and Gadgets" },
  { value: "Fashion", label: "Fashion" },
  { value: "Home and Kitchen", label: "Home and Kitchen" },
  { value: "Health and Beauty", label: "Health and Beauty" },
  { value: "Baby Products", label: "Baby Products" },
  { value: "Phones and Tablets", label: "Phones and Tablets" },
  { value: "Computing", label: "Computing" },
  { value: "Automobile", label: "Automobile" },
  { value: "Gaming", label: "Gaming" },
  { value: "Sporting Goods", label: "Sporting Goods" },
  { value: "Garden and Outdoors", label: "Garden and Outdoors" },
  { value: "Other Categories", label: "Other Categories" },
];

export default function BecomeSaller() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("");
  const [orderType, setOrderType] = useState("");
  const [opened, { open, close }] = useDisclosure(true);
  const [submitted, setSubmitted] = useState(false);
  const { user } = useAuth();

  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    region: "",
    town: "",
    address: "",
    address2: "",
    vendor_name: "",
    vendor_website: "",
    product_category: "",
    order_date: "",
    expected_delivery_date: "",
    goods_description: "",
    estimated_amount_paid: "",
    estimated_weight: "",
    reference_number: "",
  });
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}shipping-order`)
      .then((res) => {
        setOrders(res.data.results);
        console.log(res.data);
      });
  }, []);
  const handleChange = (prop) => (event) => {
    setCredentials({
      ...credentials,
      [prop]: event.target.value,
    });
  };

  const orderID = `ADIETC-000${orders?.length + 1}-Q2023`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      const res = await axios.post(`${API_URL}shipping-order/`, {
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        phone_number: credentials.phone,
        address: credentials.address,
        region: credentials.region,
        town: credentials.town,
        quater: credentials.address2,
        order_id: orderID,
        order_status: "pending",
        order_type: orderType,
        product_description: credentials.goods_description,
        product_weight: credentials.estimated_weight,
        product_price: credentials.estimated_amount_paid,
        product_type: category,
        vendor_name: credentials.vendor_name,
        vendor_site: credentials.vendor_website,
        sending_date: null,
        mode: "",
        order_date: credentials.order_date,
        expected_delivery_date: credentials.expected_delivery_date,
        expected_delivery_date_cmr: null,
        user: user?.user_id,
      });
      console.log(res);
      setSubmitted(false);
      navigate("/profile#order");

      open();
    } catch (err) {
      console.log(err);
      setSubmitted(false);
    }
  };

  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="become-saller-wrapper w-full">
        <Modal opened={opened} onClose={close} withCloseButton={false}>
          <Text fw={700} fz="lg" c="red">
            Only Feel this form when you have completed your order.
          </Text>
          <Text className="text-center text-[#4D4D4D] text-[18px] font-semibold mb-5">
            Please Use Our Shipping Information Below to complete your order.
          </Text>

          <Text fz={14} className="text-center text-[#4D4D4D] mb-5">
            <span className="font-semibold">Full Name:</span> Qtrade
            Technologies Limited
          </Text>
          <Text fz={14} className="text-center text-[#4D4D4D] mb-5">
            <span className="font-semibold">Shipping Address:</span> 1st Floor,
            1 Alhaji Masha Road, Surulere, Lagos, Nigeria
          </Text>
          <Text fz={14} className="text-center text-[#4D4D4D] mb-5">
            <span className="font-semibold">City:</span> Beijing
          </Text>
          <Text fz={14} className="text-center text-[#4D4D4D] mb-5">
            <span className="font-semibold">ZIP Code:</span> 0000
          </Text>
          <Text fz={14} className="text-center text-[#4D4D4D] mb-5">
            <span className="font-semibold">Phone:</span> +234 809 999 8888
          </Text>
          <Group position="center">
            <UnstyledButton onClick={close}>
              <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                <div className="flex space-x-2 items-center">
                  <span className="text-sm font-600">Start Importing</span>
                  <span>
                    <svg
                      className="fill-current"
                      width="6"
                      height="10"
                      viewBox="0 0 6 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.08984"
                        width="6.94106"
                        height="1.54246"
                        transform="rotate(45 1.08984 0)"
                        fill="white"
                      />
                      <rect
                        x="6"
                        y="4.9082"
                        width="6.94106"
                        height="1.54246"
                        transform="rotate(135 6 4.9082)"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </UnstyledButton>
          </Group>
        </Modal>
        <div className="title mb-10">
          <PageTitle
            title="Import Application Form"
            breadcrumb={[
              { name: "home", path: "/" },
              { name: "Start Importing", path: "/import-product" },
            ]}
          />
        </div>
        <div className="content-wrapper w-full mb-10">
          <div className="container-x mx-auto">
            <div className="w-full bg-white sm:p-[30px] p-3">
              <div className="flex xl:flex-row flex-col-reverse xl:space-x-11">
                <div className="xl:w-[824px]">
                  <div className="title w-full mb-4">
                    <h1 className="text-[22px] font-semibold text-qblack mb-1">
                      Personal Information
                    </h1>
                    <p className="text-[15px] text-qgraytwo">
                      Fill the form below with your personal information.
                    </p>
                  </div>
                  <div className="input-area">
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="First Name"
                        label="First Name*"
                        name="fname"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.first_name}
                        inputHandler={handleChange("first_name")}
                      />

                      <InputCom
                        placeholder="Last Name"
                        label="Last Name*"
                        name="lname"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.last_name}
                        inputHandler={handleChange("last_name")}
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Eenter Your Email Address"
                        label="Email Address*"
                        name="email"
                        type="email"
                        inputClasses="h-[50px]"
                        value={credentials.email}
                        inputHandler={handleChange("email")}
                      />

                      <InputCom
                        placeholder="2376 *********"
                        label="Phone*"
                        name="phone"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.phone}
                        inputHandler={handleChange("phone")}
                      />
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Region"
                        label="Region*"
                        name="region"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.region}
                        inputHandler={handleChange("region")}
                      />

                      <InputCom
                        placeholder="Town"
                        label="Town*"
                        name="town"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.town}
                        inputHandler={handleChange("town")}
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Your address Here"
                        label="Address*"
                        name="address"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.address}
                        inputHandler={handleChange("address")}
                      />
                      <InputCom
                        placeholder="Your Address Here"
                        label="Address 2"
                        name="address 2"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.address2}
                        inputHandler={handleChange("address2")}
                      />
                    </div>
                  </div>

                  {/* ============================================================== */}
                  <div className="title w-full mb-4">
                    <h1 className="text-[22px] font-semibold text-qblack mb-1">
                      Vendor Information
                    </h1>
                    <p className="text-[15px] text-qgraytwo">
                      Fill the form below about who you are buying from.
                    </p>
                  </div>
                  <div className="input-area">
                    <div className="mb-5">
                      <InputCom
                        placeholder="Vendor Name"
                        label="Vendor Name*"
                        name="shopname"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.vendor_name}
                        inputHandler={handleChange("vendor_name")}
                      />
                    </div>
                    <div className="mb-5">
                      <InputCom
                        placeholder="Vendor Website"
                        label="Vendor Website"
                        name="vendorwebsite"
                        type="website"
                        inputClasses="h-[50px]"
                        value={credentials.vendor_website}
                        inputHandler={handleChange("vendor_website")}
                      />
                    </div>
                    <div className="mb-5">
                      <Select
                        label="Order Type*"
                        placeholder="Select Order Type"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        data={[
                          { value: "Import", label: "Import" },
                          { value: "Export", label: "Export" },
                        ]}
                        value={orderType}
                        onChange={setOrderType}
                      />
                    </div>
                    <div className="mb-5">
                      <Select
                        label="Product Category*"
                        placeholder="Select Product Category"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        data={PRODUCT_CATEGORY}
                        value={category}
                        onChange={setCategory}
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      {/* <DateInput
                        value={orderDate}
                        valueFormat="YYYY MMM DD"
                        onChange={setOrderDate}
                        label="Order Date*"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        placeholder="Select Date"
                        maw={400}
                        mx="auto"
                      /> */}
                      <InputCom
                        placeholder="Date of Order"
                        label="Date of Order*"
                        name="orderdate"
                        type="date"
                        inputClasses="h-[50px]"
                        value={credentials.order_date}
                        inputHandler={handleChange("order_date")}
                      />
                      <InputCom
                        placeholder="Expected Delivery Date"
                        label="Expected Delivery Date*"
                        name="expecteddeliverydate"
                        type="date"
                        inputClasses="h-[50px]"
                        value={credentials.expected_delivery_date}
                        inputHandler={handleChange("expected_delivery_date")}
                      />
                      {/* <DateInput
                        value={date}
                        valueFormat="YYYY MMM DD"
                        onChange={setDate}
                        label="Expected Delivery Date*"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        placeholder="Select Date"
                        maw={400}
                        mx="auto"
                      /> */}
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-[30px]">
                      <InputCom
                        placeholder="Describe what you bought"
                        label="Goods Description*"
                        name="description"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.goods_description}
                        inputHandler={handleChange("goods_description")}
                      />

                      <InputCom
                        placeholder="Amount Paid in USD"
                        label="Estimated Amount Paid*"
                        name="amountpaid"
                        type="number"
                        inputClasses="h-[50px]"
                        value={credentials.estimated_amount_paid}
                        inputHandler={handleChange("estimated_amount_paid")}
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-[30px]">
                      <InputCom
                        placeholder="Weight in KG"
                        label="Estimated Weight*"
                        name="weight"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.estimated_weight}
                        inputHandler={handleChange("estimated_weight")}
                      />

                      <InputCom
                        placeholder="Reference Number"
                        label="Reference Number*"
                        name="referencenumber"
                        type="text"
                        inputClasses="h-[50px]"
                        value={credentials.reference_number}
                        inputHandler={handleChange("reference_number")}
                      />
                    </div>

                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <Button
                          onClick={handleSubmit}
                          loading={submitted}
                          className="black-btn text-sm text-white w-[490px] h-[50px] font-semibold flex justify-center bg-purple items-center"
                        >
                          <span>Submit</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
