import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const ConferenceCallToAction = () => {
  return (
    <Card className="w-11/12 md:w-full bg-[#fafafa] my-8 px-4">
      <CardContent className="p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-green-600">
              Ready to Participate?
            </h2>
            <p className="text-xl md:text-2xl text-red-600 max-w-2xl">
              Join us at the conference or share your research with the community.
            </p>
          </div>

          <div className="flex sm:flex-row gap-4">
            <Button 
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Register Now
            </Button>
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Submit Paper
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ConferenceCallToAction