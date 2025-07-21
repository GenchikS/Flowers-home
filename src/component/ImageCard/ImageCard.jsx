// import { useSelector } from "react-redux";
// import { selectFlowers } from "../../redux/flowers/flowersSlice.js";

export default function ImageCard({ flower, color, size, blossom, price }) {
    return (
      <div>
        <img src="" alt="" />
        <ul>
          <li>
            <p>{flower}</p>
            <p>{color}</p>
            <p>{size} см</p>
            <p>{blossom}</p>
            <p>{price} грн.</p>
          </li>
        </ul>
      </div>
    );
}