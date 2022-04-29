import logo from './logo.svg';
import './App.css';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from 'pigeon-maps';
import { React, useEffect, useState } from "react"
import MyMap from "./Map"

export default function nowMyMap() {
  return (
    <div>
      <MyMap>
      </MyMap>
    </div>
  );
};