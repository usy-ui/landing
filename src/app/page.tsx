import { redirect } from "next/navigation";

import { AppRoute } from "./layout.constants";

const Home = () => {
  return redirect(AppRoute.USE_CASES);
};

export default Home;
