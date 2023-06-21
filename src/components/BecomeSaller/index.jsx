import { useRef, useState } from "react";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import { Select, Button } from "@mantine/core";
import { DateInput } from "@mantine/dates";


export default function BecomeSaller() {
  const [profileImg, setProfileImg] = useState(null);
  const [logoImg, setLogoImg] = useState(null);
  const [coverImg, setCoverImg] = useState(null);
  const [date, setDate] = useState(new Date());
  const [orderDate, setOrderDate] = useState(new Date());
  
  // logo img
  const logoImgInput = useRef(null);
  const browseLogoImg = () => {
    logoImgInput.current.click();
  };
  const logoImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setLogoImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };
  // profile img
  const profileImgInput = useRef(null);
  const browseProfileImg = () => {
    profileImgInput.current.click();
  };
  const profileImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setProfileImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };
  // cover img
  const coverImgInput = useRef(null);
  const browseCoverImg = () => {
    coverImgInput.current.click();
  };
  const coverImgChangHandler = (e) => {
    if (e.target.value !== "") {
      const imgReader = new FileReader();
      imgReader.onload = (event) => {
        setCoverImg(event.target.result);
      };
      imgReader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <Layout childrenClasses="pt-0 pb-0">
      <div className="become-saller-wrapper w-full">
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
                      Fill the form below or write us .We will help you as soon
                      as possible.
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
                      />

                      <InputCom
                        placeholder="Last Name"
                        label="Last Name*"
                        name="lname"
                        type="text"
                        inputClasses="h-[50px]"
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Eenter Your Email Address"
                        label="Email Address*"
                        name="email"
                        type="email"
                        inputClasses="h-[50px]"
                      />

                      <InputCom
                        placeholder="2376 *********"
                        label="Phone*"
                        name="phone"
                        type="text"
                        inputClasses="h-[50px]"
                      />
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <Select
                        label="Region*"
                        placeholder="Select Region"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        data={[
                          { value: "react", label: "React" },
                          { value: "ng", label: "Angular" },
                          { value: "svelte", label: "Svelte" },
                          { value: "vue", label: "Vue" },
                        ]}
                      />

                      <Select
                        label="Town*"
                        placeholder="Select Town"
                        className={`input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none h-[50px]`}
                        data={[
                          { value: "react", label: "React" },
                          { value: "ng", label: "Angular" },
                          { value: "svelte", label: "Svelte" },
                          { value: "vue", label: "Vue" },
                        ]}
                      />
                    </div>

                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <InputCom
                        placeholder="Your address Here"
                        label="Address*"
                        name="address"
                        type="text"
                        inputClasses="h-[50px]"
                      />
                      <InputCom
                        placeholder="Your Address Here"
                        label="Address 2"
                        name="address 2"
                        type="text"
                        inputClasses="h-[50px]"
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
                      />
                    </div>
                    <div className="mb-5">
                      <InputCom
                        placeholder="Vendor Website"
                        label="Vendor Website"
                        name="vendorwebsite"
                        type="website"
                        inputClasses="h-[50px]"
                      />
                    </div>
                    <div className="mb-5">
                     <Select
                        label="Product Category*"
                        placeholder="Select Product Category"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        data={[
                          { value: "react", label: "React" },
                          { value: "ng", label: "Angular" },
                          { value: "svelte", label: "Svelte" },
                          { value: "vue", label: "Vue" },
                        ]}
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-5">
                      <DateInput
                        value={orderDate}
                        onChange={setOrderDate}
                        label="Order Date*"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        placeholder="Select Date"
                        maw={400}
                        mx="auto"
                      />

                      <DateInput
                        value={date}
                        onChange={setDate}
                        label="Expected Delivery Date*"
                        className="input-field placeholder:text-sm text-sm px-0 text-dark-gray w-full h-full font-normal bg-white focus:ring-0 focus:outline-none"
                        placeholder="Select Date"
                        maw={400}
                        mx="auto"
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-[30px]">
                      <InputCom
                        placeholder="Describe what you bought"
                        label="Goods Description*"
                        name="description"
                        type="text"
                        inputClasses="h-[50px]"
                      />

                      <InputCom
                        placeholder="Amount Paid in USD"
                        label="Estimated Amount Paid*"
                        name="amountpaid"
                        type="number"
                        inputClasses="h-[50px]"
                      />
                    </div>
                    <div className="flex sm:flex-row flex-col space-y-5 sm:space-y-0 sm:space-x-5 mb-[30px]">
                      <InputCom
                        placeholder="Weight in KG"
                        label="Estimated Weight*"
                        name="weight"
                        type="text"
                        inputClasses="h-[50px]"
                      />

                      <InputCom
                        placeholder="Amount Paid in USD"
                        label="Estimated Amount Paid*"
                        name="amountpaid"
                        type="number"
                        inputClasses="h-[50px]"
                      />
                    </div>

                    <div className="signin-area mb-3">
                      <div className="flex justify-center">
                        <Button
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
