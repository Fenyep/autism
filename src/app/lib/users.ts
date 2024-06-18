import axios from "axios";

export async function login(username: string, password: string) {
  try {
    const response = await axios.post("/login", { username, password });

    if (response.status === 201) {
      console.log(response.data);

      return {
        data: response.data,
        error: undefined,
      };
    }
    return {
      data: undefined,
      error: "Unable to connect to server",
    };
  } catch (error) {
    console.log(error);
    return { error };
  }
}
