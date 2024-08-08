const SignupNews = () => {
    return (
        <div
            className="flex flex-wrap items-center w-full text-left shadow-2xl rounded-lg bg-blueDiv bg-cover p-2">
            <div className="flex-1 w-full">
                <h3 className="mb-2 text-2xl font-palanquin font-semibold text-gray-900">Subscribe to our Newsletter</h3>
                <p className="text-gray-900">Provide your email to get notification when we launch
                    new products or publish new articles.
                </p>
            </div>
            <div className="px-1 flex-0 w-1/2">
                <form>
                    <input type="hidden" name="tags" value="earlyaccess"/>
                        <div className="flex flex-col sm:flex-row">
                            <input type="email" id="email" name="email" placeholder="Email:" className="flex-1 px-3 py-2 placeholder-gray-800 rounded-md mr-2"/>
                                <button type="submit" className="w-full px-6 py-4 mt-5 text-gray-900 text-lg bg-hero rounded-md sm:mt-0 sm:w-auto whitespace-nowrap"> Subscribe </button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default SignupNews