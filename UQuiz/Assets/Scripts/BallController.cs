using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallController : MonoBehaviour
{
    public GameObject ballPrefab;
    private GameObject ball1;
    private GameObject ball2;
    private GameObject ball3;
    private GameObject ball4;

    void Start() {
        spawn();
    }
    public void spawn()
    {
        ball1 = Instantiate(ballPrefab, new Vector3(-44.866f, 10.016f, 54.235f), Quaternion.identity);
        ball1.layer = LayerMask.NameToLayer("Grab");

        ball2 = Instantiate(ballPrefab, new Vector3(-44.866f, 10.016f, 54.798f), Quaternion.identity);
        ball2.layer = LayerMask.NameToLayer("Grab");

        ball3 = Instantiate(ballPrefab, new Vector3(-44.866f, 10.016f, 55.131f), Quaternion.identity);
        ball3.layer = LayerMask.NameToLayer("Grab");

        ball4 = Instantiate(ballPrefab, new Vector3(-44.866f, 10.016f, 55.588f), Quaternion.identity);
        ball4.layer = LayerMask.NameToLayer("Grab");

        Debug.Log("Balls have spawned");
    }

    public void despawn() {
        Destroy (ball1);
        Destroy (ball2);
        Destroy (ball3);
        Destroy (ball4);
        Debug.Log("Balls have despawned");
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
