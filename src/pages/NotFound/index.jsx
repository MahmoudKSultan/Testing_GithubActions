import { Card } from "../../components";

export function NotFound() {
	return (
		<div className="w-full h-full flex justify-center items-center mt-20">
			<Card className=" shadow-lg max-w-[700px] w-full">
				<h1 className="text-3xl text-center">Not Found Page 404</h1>
			</Card>
		</div>
	);
}

export default NotFound;
