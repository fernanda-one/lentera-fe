import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
    acccessToken: string,
    refreshToken: string,
}

type Action = {
    updateAccessToken: (firstName: State['acccessToken']) => void
    updateRefreshToken: (lastName: State['refreshToken']) => void
  }

// export const useAuthStore = create<State & Action>()(
//     persist(
//         (set) => ({
//             acccessToken: "",
//             refreshToken: "",
//             updateAccessToken: ()
//         }),
//         {name: 'auth-store', skipHydration: true},
//     ),
// )