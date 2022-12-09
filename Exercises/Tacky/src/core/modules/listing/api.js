import { supabase } from "../../api/supabase";

export const getListings = async () => {
  return await supabase
    .from("listings")
    .select("*")
    .order("title")
    .throwOnError();
};

export const createListing = async (listing) => {
  return await supabase
    .from("listings")
    .insert(listing)
    .select()
    .throwOnError()
    .single();
};
