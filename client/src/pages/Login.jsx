import React from "react";
import LoginForm from "./../components/LoginForm";

export default function Login() {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="logoShape.png"
                        alt="logo"
                      />
                      <h4 className="mt-1 pb-1 pt-8 text-xl font-semibold">
                        Login
                      </h4>
                    </div>
                    <LoginForm />
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */} 
                <div className="login-image flex bg-auto items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                  <div className="px-4 py-96 "></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
