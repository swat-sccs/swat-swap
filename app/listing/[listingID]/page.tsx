import { Container, Grid, Box } from "@/components";
import Image from "next/image";
import { getUserDataById, getListing } from "@/app/actions";
import { minioListingImagesEndpoint } from "@/config/";
import DeleteListingButton from "@/components/DeleteListingButton";
import DeactivateListingButton from "@/components/DeactivateListingButton";
import { 
  Tag, 
  Package, 
  DollarSign, 
  Star, 
  Bookmark,
  CreditCard,
  User,
  Mail,
  Clock
} from "lucide-react";

interface ListingPageProps {
  params: {
    listingID: string;
  };
}

const ListingPage = async ({ params: { listingID } }: ListingPageProps) => {
  const listing = await getListing(parseInt(listingID));

  if (!listing) {
    return <p>Listing does not exist!</p>;
  }

  const listingUserData = await getUserDataById(listing.userId);

  const formattedCreatedAt = listing?.createdAt
    ? new Date(listing.createdAt).toLocaleString()
    : "";

  const formatCondition = (condition: string) => {
    return condition
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  return (
    <Container className="w-3/4 mx-auto mt-8 pb-8 bg-gray-50 rounded-lg shadow-md">
      <div className="flex justify-between items-start p-6">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-3xl font-bold">{listing?.title}</h1>
          </div>
        </div>
      </div>

      <Grid className="p-6">
        <Grid className="pr-5">
          <Box>
            <div className="relative w-64 h-64 rounded-lg overflow-hidden">
              <Image
                fill={true}
                src={`${minioListingImagesEndpoint}/${listing?.images[0].fileName}`}
                alt="listing image featuring a product/service"
                layout="fill"
                className="object-cover"
              />
            </div>
          </Box>
        </Grid>

        <Grid className="pr-5">
          <div className="space-y-6">
            {/* Type Field */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <Tag className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Type</h2>
                <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">
                  {listing.type === 'selling' ? 'For Sale' : 'Service'}
                </span>
              </div>
            </div>

            {/* Description Field */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Tag className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Description</h2>
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {listing?.description}
                </span>
              </div>
            </div>

            {/* Price Field */}
            {!!listing.price && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Price</h2>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      ${listing?.price}
                    </span>
                    <span className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
                      {listing.firmonprice ? 'Price is firm' : 'Price negotiable'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Brand Field */}
            {listing.brand && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                  <Star className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Brand</h2>
                  <span className="bg-pink-50 text-pink-700 px-3 py-1 rounded-full text-sm">
                    {listing.brand}
                  </span>
                </div>
              </div>
            )}

            {/* Category Field */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0">
                <Bookmark className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Category</h2>
                <span className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-sm">
                  {listing.category}
                </span>
              </div>
            </div>

            {/* Condition Field (only for selling type) */}
            {listing.type === 'selling' && (
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Package className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold mb-2">Condition</h2>
                  <span className="bg-red-50 text-red-700 px-3 py-1 rounded-full text-sm">
                    {formatCondition(listing?.condition)}
                  </span>
                </div>
              </div>
            )}

            {/* Payment Types Field */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-2">Payment Types</h2>
                <div className="flex gap-2 flex-wrap">
                  {listing?.acceptedPaymentTypes.map((pt) => (
                    <span
                      key={pt}
                      className="bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-sm"
                    >
                      {pt}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="pt-4">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Name</h2>
                    <span className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
                      {listingUserData.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Email</h2>
                    <span className="bg-orange-50 text-orange-700 px-3 py-1 rounded-full text-sm">
                      {listingUserData.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-gray-600" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Posted</h2>
                    <span className="bg-gray-50 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {formattedCreatedAt}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>

        <Grid className="flex gap-4 mt-8">
          <DeleteListingButton listingId={listing.id} />
          <DeactivateListingButton
            listingId={listing.id}
            active={listing.active}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListingPage;