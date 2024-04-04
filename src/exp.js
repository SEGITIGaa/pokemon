import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useState, useContext, useEffect, createContext, } from "react";
import axios from "axios";
import ConfigAxios from "./variables/ConfigAxios";
import './App.css'
import { PokemonProvider, usePokemonContext } from "./variables/PokemonContext";
import InfiniteScroll from "react-infinite-scroll-component";

// pages
import Home from "./pages/Home";
import SavedPokemonList from "./pages/SavedPoke";

// components
import {PokeCard, CardUnsave} from "./components/PokeCard";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

export {useEffect, useState, CardUnsave , Router,PokemonProvider, InfiniteScroll, Filter, Navbar, Modal, usePokemonContext, SavedPokemonList, Routes, createContext, useContext, Route, Link, useParams, axios, Home, ConfigAxios ,PokeCard, Search, Detail}