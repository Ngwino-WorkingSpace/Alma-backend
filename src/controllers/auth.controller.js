import { supabase } from '../services/supabase.js';

export async function setupOrganization(req, res) {
  const { restaurantName, location } = req.body;
  const userId = req.user.id;

  if (!restaurantName) {
    return res.status(400).json({ error: 'Restaurant name required' });
  }

  const { data: existing } = await supabase
    .from('organizations')
    .select('id')
    .eq('owner_id', userId)
    .single();

  if (existing) {
    return res.status(400).json({ error: 'Organization already exists' });
  }

  const { error } = await supabase.from('organizations').insert({
    name: restaurantName,
    location,
    type: 'restaurant',
    owner_id: userId
  });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.status(201).json({ message: 'Organization created' });
}

export async function me(req, res) {
  const { data: org } = await supabase
    .from('organizations')
    .select('*')
    .eq('owner_id', req.user.id)
    .single();

  res.json({
    user: req.user,
    organization: org
  });
}
