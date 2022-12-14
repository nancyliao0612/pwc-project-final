import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TextField = styled.div`
  margin: 10px 0;
  span {
    color: var(--theme-color);
  }
  input {
    border: none;
  }
  @media only screen and (min-width: 768px) {
    margin: 15px 0;
  }
`;

export default function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const {
      name,
      company,
      department,
      jobTitle,
      taxID,
      email,
      address,
      phone,
    } = data;
    try {
      await axios.post("/api/respondents", {
        name,
        company,
        department,
        jobTitle,
        taxID,
        email,
        address,
        phone,
      });
    } catch (error) {
      console.log(error);
    }
    if (
      [
        "04016004",
        "22102494",
        "27737101",
        "54338542",
        "24471212",
        "24933919",
        "52540210",
        "94998251",
        "80190853",
        "97115921",
        "24957480",
        "53933810",
        "24953604",
        "04111302",
        "97479675",
        "54177736",
        "28172279",
        "70480262",
        "48865995",
        "99330806",
      ].includes(taxID)
    ) {
      navigate("/reply");
    } else {
      navigate("/downloadPDF");
    }
  };

  const handleTaxIdValidation = (taxID) => {
    let one = taxID.split("")[0] * 1;
    let two = taxID.split("")[1] * 2;
    let three = taxID.split("")[2] * 1;
    let four = taxID.split("")[3] * 2;
    let five = taxID.split("")[4] * 1;
    let six = taxID.split("")[5] * 2;
    let seven = taxID.split("")[6] * 4;
    let eight = taxID.split("")[7] * 1;

    const sum = [one, two, three, four, five, six, seven, eight];

    let total = 0;
    for (let i = 0; i < sum.length; i++) {
      if (sum[i] * 10 >= 100) {
        sum[i] = sum[i].toString();
        sum[i] = Number(sum[i].split("")[0]) + Number(sum[i].split("")[1]);
      }
      total = total + sum[i];
    }
    return total % 10 === 0;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField>
        <h2 htmlFor="name">
          ??????<span>*</span>
        </h2>
        <input {...register("name", { required: "?????????????????????" })} />
        <p>{errors.name?.message}</p>
      </TextField>
      <TextField>
        <h2 htmlFor="company">
          ??????/??????<span>*</span>
        </h2>
        <input {...register("company", { required: "?????????????????????" })} />
        <p>{errors.company?.message}</p>
      </TextField>
      <TextField>
        <h2 htmlFor="department">??????</h2>
        <input {...register("department")} />
      </TextField>
      <TextField>
        <h2 htmlFor="jobTitle">??????</h2>
        <input {...register("jobTitle")} />
      </TextField>
      <TextField>
        <h2 htmlFor="taxID">
          ????????????<span>*</span>
        </h2>
        <input
          {...register("taxID", {
            required: true,
            validate: handleTaxIdValidation,
          })}
        />
        {(errors.taxID || errors.taxID?.type === "validate") && (
          <p>???????????????????????????</p>
        )}
      </TextField>
      <TextField>
        <h2 htmlFor="email">
          ????????????<span>*</span>
        </h2>
        <input
          {...register("email", {
            required: "??????????????? email ??????",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "??????????????? email ??????",
            },
          })}
        />
        <p>{errors.email?.message}</p>
      </TextField>
      <TextField>
        <h2 htmlFor="address">
          ????????????<span>*</span>
        </h2>
        <input
          {...register("address", {
            required: "?????????????????????",
          })}
        />
        <p>{errors.address?.message}</p>
      </TextField>
      <TextField>
        <h2 htmlFor="phone">
          ????????????<span>*</span>
        </h2>
        <input {...register("phone", { required: "?????????????????????" })} />
        <p>{errors.phone?.message}</p>
      </TextField>
      <br />
      <button type="submit">??????</button>
    </form>
  );
}
