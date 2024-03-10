import { Button } from "@nextui-org/react";

function Searchbar() {
    return (
        <div className='text-center'>
            <input
                type="text"
                name="search"
                id="search"
                className="shadow-xl w-[60%] h-30 p-2 outline-none"
                placeholder="Search...."

            />
            <Button color="primary" variant="shadow">
                Submit
            </Button>
        </div>

    )
}
export default Searchbar
