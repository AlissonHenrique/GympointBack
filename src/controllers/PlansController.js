import Plans from '../models/Plans';

class PlansController {
  async store(req, res) {
    const { title, duration, price } = req.body;
    const plan = await Plans.create({
      title,
      duration,
      price,
      plan_id: 5,
    });
    return res.json(plan);
  }
}

export default new PlansController();
