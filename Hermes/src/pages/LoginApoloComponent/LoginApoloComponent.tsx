import { useState } from "react";
import { TERipple } from "tw-elements-react";

function LoginApoloComponent() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setUser(formData.get("user") as string);
    setPassword(formData.get("password") as string);
    console.log(user, password);
  };
  return (
    <main className="w-[100vw] h-[100vh] bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
      <section className="w-[90vw] h-[90vh] m-[auto]">
        <div className="container p-10">
          <div className=" g-6 flex  flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div className="px-4 max-h-[90vh] md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/* <!--Logo--> */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="/img/logo.png"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Hermes - Apolo
                        </h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                      <div className="flex flex-col space-y-2">
                          <label
                            htmlFor="default"
                            className="text-gray-700 select-none font-medium text-left"
                          >
                            Conta
                          </label>
                          <input
                            id="default"
                            type="text"
                            name="default"
                            placeholder="Sua conta"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                        
                        {/* <!--Username input--> */}
                        <div className="flex flex-col space-y-2 mt-2">
                          <label
                            htmlFor="default"
                            className="text-gray-700 select-none font-medium text-left"
                          >
                            Usuario
                          </label>
                          <input
                            id="default"
                            type="text"
                            name="default"
                            placeholder="Seu usuario"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>

                        {/* <!--Password input--> */}
                        <div className="flex flex-col space-y-2 mt-2 mb-6">
                          <label
                            htmlFor="default"
                            className="text-gray-700 select-none font-medium text-left"
                          >
                            Senha
                          </label>
                          <input
                            id="default"
                            type="password"
                            name="default"
                            placeholder="********"
                            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>

                        {/* <!--Submit button--> */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <TERipple rippleColor="light" className="w-full">
                            <button
                              className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                              type="button"
                              style={{
                                background:
                                  "linear-gradient(270deg, rgba(37,70,25,1) 0%, rgba(71,124,61,1) 77%, rgba(45,182,72,1) 100%)",
                              }}
                            >
                              Log in
                            </button>
                          </TERipple>

                          {/* <!--Forgot password link--> */}
                          <a href="#!">Forgot password?</a>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  <div
                    className="flex items-center max-h-[90vh] rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(150deg, rgba(37,70,25,1) 0%, rgba(61,124,96,1) 60%, rgba(76,184,122,1) 100%)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoginApoloComponent;
