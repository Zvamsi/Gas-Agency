import { useState } from "react";
import Services from "./Services";
import Button from "./Button";

export default function Home({ show }) {
  return (
    <div>
      <div className="bg-gray-700 place-content-between">
        <img
          className="w-[20rem] h-[10rem] object-cover"
          src="public/cylinder-01.png"
          alt="Cylinder -01"
        />
        <p>Gas cylinder services</p>
        <img
          className="w-[25rem] h-[10rem] object-cover"
          src="public/cylinder-02.png"
          alt=""
        />
      </div>

      <p>
        A. Domestic LPG Services (For Households) 14.2 kg cylinder (Standard
        domestic cooking gas) 5 kg cylinder (Mini cylinder for small families)
        Composite cylinder (Lightweight, transparent fiber-reinforced cylinders)
        Subsidized LPG (Pradhan Mantri Ujjwala Yojana - PMUY) B. Commercial LPG
        Services 19 kg, 47.5 kg cylinders (For restaurants, hotels, industries,
        etc.) Bulk LPG supply (For large-scale commercial use) C. Piped Natural
        Gas (PNG) Services Instead of LPG cylinders, some cities have PNG
        connections directly to homes. Providers include: GAIL Gas Adani Gas
        Mahanagar Gas (Mumbai) Indraprastha Gas (Delhi NCR) ✅ 3. Additional
        Services Provided 🔹 Online Booking & Refill Services SMS / IVRS booking
        Mobile apps & websites WhatsApp booking (Indane, HP, Bharat Gas) 🔹
        Doorstep Delivery Standard home delivery for LPG cylinders Tatkal Seva
        (Emergency delivery within 2 hours) available in some cities 🔹 LPG
        Cylinder Portability Switch from Indane to Bharat Gas or HP Gas easily
        No need for a new connection 🔹 Auto Gas (LPG for Vehicles) Some
        companies also offer Auto LPG for cars
      </p>
    </div>
  );
}
